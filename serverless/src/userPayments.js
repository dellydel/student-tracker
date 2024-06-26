import httpResponse from "./http_response.js";
import { DynamoDBClient, ScanCommand } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const retrievePayments = async (email) => {
  const command = new ScanCommand({
    TableName: process.env.REGISTRATIONS_TABLE,
    FilterExpression: "emailLower = :emailLower OR email = :email",
    ExpressionAttributeValues: {
      ":emailLower": { S: email.toLocaleLowerCase() },
      ":email": { S: email },
    },
    ProjectionExpression: "amount, created, course_name",
  });
  try {
    let response = await docClient.send(command);
    const responseObjects = response.Items.map((record) => unmarshall(record));

    const amounts = responseObjects.map((obj) => ({
      date: new Date(obj.created * 1000).toLocaleString(),
      amount: obj.amount,
      name: obj.course_name,
    }));
    return httpResponse(200, amounts);
  } catch (error) {
    console.error("Error retrieving payment amounts:", error);
    return httpResponse(error.statusCode, "Error retrieving payment amounts");
  }
};
