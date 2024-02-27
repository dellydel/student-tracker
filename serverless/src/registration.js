import AWS from "aws-sdk";
import httpResponse from "./http_response";
import Stripe from "stripe";
const dynamoDB = new AWS.DynamoDB.DocumentClient();
const stripe = Stripe(process.env.STRIPE_SECRET);

export const handler = async (event) => {
  const method = event.httpMethod;

  switch (method) {
    case "POST":
      const body = JSON.parse(event.body);

      if (body.type === "checkout.session.completed") {
        const session = body.data.object;
        const { id, amount_total: amount, created, customer_details } = session;

        const line_items = await stripe.checkout.sessions.listLineItems(
          session.id
        );

        const postParams = generateParams(
          id,
          amount,
          created,
          customer_details.email,
          line_items.data[0]
        );

        try {
          await dynamoDB.put(postParams).promise();
          return httpResponse(200, "Transaction recorded successfully");
        } catch (error) {
          console.error("Error recording transaction:", error);
          return httpResponse(error.statusCode, "Error recording transaction");
        }
      }

    case "GET":
      const email = decodeURIComponent(event.queryStringParameters.email);
      const getParams = {
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
      };
      try {
        let registrations = await dynamoDB.scan(getParams).promise();
        return httpResponse(200, registrations.Items);
      } catch (error) {
        console.error("Error retrieving registration:", error);
        return httpResponse(error.statusCode, "Error retrieving registrations");
      }
  }
};

function generateParams(id, amount, created, receipt_email, line_item) {
  return {
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
  };
}
