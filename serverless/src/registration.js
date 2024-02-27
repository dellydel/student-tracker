import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  PutCommand,
  QueryCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";

import httpResponse from "./http_response";
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

export const getRegistrationByEmail = async (id) => {
  const command = new QueryCommand({
    TableName: process.env.REGISTRATIONS_TABLE,
    FilterExpression: "#emailLower = :emailLower OR #email = :email",
    ExpressionAttributeNames: {
      "#emailLower": "emailLower",
      "#email": "email",
    },
    ExpressionAttributeValues: {
      ":emailLower": email.toLocaleLowerCase(),
      ":email": email,
    },
  });
  try {
    let registrations = await docClient.send(command);
    return httpResponse(200, registrations.Items);
  } catch (error) {
    console.error("Error retrieving registration:", error);
    return httpResponse(error.statusCode, "Error retrieving registrations");
  }
};

export const createCourseRegistration = async (body) => {
  if (body.type === "checkout.session.completed") {
    const session = body.data.object;
    const { id, amount_total: amount, created, customer_details } = session;

    const line_items = await stripe.checkout.sessions.listLineItems(session.id);

    const command = generateCommand(
      id,
      amount,
      created,
      customer_details.email,
      line_items.data[0]
    );

    try {
      await docClient.send(command);
      return httpResponse(200, "Transaction recorded successfully");
    } catch (error) {
      console.error("Error recording transaction:", error);
      return httpResponse(error.statusCode, "Error recording transaction");
    }
  }
};
