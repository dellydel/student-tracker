import httpResponse from "./http_response.js";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const retrievePayments = async (email, productId) => {
  const command = new ScanCommand({
    TableName: process.env.REGISTRATIONS_TABLE,
    FilterExpression:
      "emailLower = :emailLower OR email = :email AND productId = :productId",
    ExpressionAttributeValues: {
      ":emailLower": { S: email.toLocaleLowerCase() },
      ":email": { S: email },
      ":productId": { S: productId },
    },
    ProjectionExpression: "amount",
  });
  try {
    let response = await docClient.send(command);
    const idObjs = response.Items.map((record) => unmarshall(record));
    const ids = idObjs.map((obj) => obj.id);
    return httpResponse(200, ids);
  } catch (error) {
    console.error("Error retrieving payment amounts:", error);
    return httpResponse(error.statusCode, "Error retrieving payment amounts");
  }
};
