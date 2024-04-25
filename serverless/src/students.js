import { DynamoDBClient } from "@aws-sdk/client-dynamodb";
import {
  PutCommand,
  GetCommand,
  DynamoDBDocumentClient,
} from "@aws-sdk/lib-dynamodb";
import httpResponse from "./http_response.js";

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
