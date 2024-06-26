import { DynamoDBClient, QueryCommand } from "@aws-sdk/client-dynamodb";
import {
  PutCommand,
  GetCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import httpResponse from "./http_response.js";
import { unmarshall } from "@aws-sdk/util-dynamodb";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const submitRegistration = async (body) => {
  const command = new PutCommand({
    TableName: process.env.STUDENTS_TABLE,
    Item: body,
  });
  try {
    await docClient.send(command);
    return httpResponse(201, "Your submission was successful.");
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};

export const getStudentById = async (studentId) => {
  const command = new GetCommand({
    TableName: process.env.STUDENTS_TABLE,
    Key: {
      id: studentId,
    },
  });
  try {
    let student = await docClient.send(command);
    return httpResponse(200, student);
  } catch (error) {
    console.error("Error retrieving student information:", error);
    return httpResponse(
      error.statusCode,
      "Error retrieving student information"
    );
  }
};

export const getStudentByEmail = async (email) => {
  const params = {
    TableName: process.env.STUDENTS_TABLE,
    IndexName: "EmailIndex",
    KeyConditionExpression: "email = :email",
    ExpressionAttributeValues: {
      ":email": { S: email },
    },
  };

  const command = new QueryCommand(params);
  try {
    let result = await client.send(command);
    const student = result.Items.map((record) => unmarshall(record));

    return httpResponse(200, student[0] ?? []);
  } catch (error) {
    console.error("Error retrieving student information:", error);
    return httpResponse(
      error.statusCode,
      "Error retrieving student information"
    );
  }
};
