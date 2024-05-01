import httpResponse from "./http_response.js";
import { SNSClient, PublishCommand } from "@aws-sdk/client-sns";
import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient, PutCommand } from "@aws-sdk/lib-dynamodb";
import { randomUUID } from "crypto";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);
const snsClient = new SNSClient({});

export const processContactRequest = async (name, email, message) => {
  const command = generateCommand(name, email, message);
  await docClient.send(command);
  await sendContactEmailNotification();
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

const sendContactEmailNotification = async () => {
  await snsClient.send(
    new PublishCommand({
      TopicArn: process.env.CONTACT_TOPIC,
      Message: "A new contact / more informtion request has been submitted",
    })
  );
};
