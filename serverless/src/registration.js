import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { PutCommand, DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

import httpResponse from "./http_response.js";
import Stripe from "stripe";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const stripe = Stripe(process.env.STRIPE_SECRET);

const generateCommand = (id, amount, created, receipt_email, line_item) => {
  return new PutCommand({
    TableName: process.env.REGISTRATIONS_TABLE,
    Item: {
      id: id,
      amount: amount,
      created: created,
      email: receipt_email,
      emailLower: receipt_email.toLocaleLowerCase(),
      course_name: line_item.description,
      price: line_item.price.unit_amount,
      product_id: line_item.price.product,
    },
  });
};

export const getRegistrationByEmail = async (email) => {
  const command = new ScanCommand({
    TableName: process.env.REGISTRATIONS_TABLE,
    FilterExpression: "emailLower = :emailLower OR email = :email",
    ExpressionAttributeValues: {
      ":emailLower": { S: email.toLocaleLowerCase() },
      ":email": { S: email },
    },
  });
  try {
    let response = await docClient.send(command);
    const responseObjs = response.Items.map((record) => unmarshall(record));
    return httpResponse(200, responseObjs);
  } catch (error) {
    console.error("Error retrieving registration:", error);
    return httpResponse(error.statusCode, "Error retrieving registrations");
  }
};

export const createCourseRegistration = async (body) => {
  if (body.type === "payment_intent.succeeded") {
    const session = body.data.object;
    const { id, amount, created, receipt_email } = session;
    try {
      const checkout_session = await stripe.checkout.sessions.list({
        payment_intent: id,
        expand: ["data.line_items"],
      });
      const lineItems = await stripe.checkout.sessions.listLineItems(
        checkout_session.data[0].id
      );
      const command = generateCommand(
        id,
        amount,
        created,
        receipt_email,
        lineItems.data[0]
      );
      await docClient.send(command);
      return httpResponse(200, "Transaction recorded successfully");
    } catch (error) {
      console.error("Error recording transaction:", error);
      return httpResponse(error.statusCode, "Error recording transaction");
    }
  }
};
