import httpResponse from "./http_response.js";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const processContactRequest = async (name, email, message) => {
  const command = generateCommand(name, email, message);
  await docClient.send(command);
  return httpResponse(
    200,
    JSON.stringify({ message: "Success! Your message has been sent." })
  );
};

const generateCommand = (name, email, message) => {
  return new PutCommand({
    TableName: process.env.CONTACT_TABLE,
    Item: {
      id: randomUUID(),
      name: name,
      email: email,
      message: message,
      timestamp: Date.now(),
    },
  });
};
