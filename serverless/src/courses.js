import {
  DynamoDBClient,
  ScanCommand,
  GetItemCommand,
} from "@aws-sdk/client-dynamodb";
import { DynamoDBDocumentClient } from "@aws-sdk/lib-dynamodb";
import { unmarshall } from "@aws-sdk/util-dynamodb";

import httpResponse from "./http_response.js";

const client = new DynamoDBClient({});
const docClient = DynamoDBDocumentClient.from(client);

export const getAllCourses = async () => {
  const command = new ScanCommand({
    TableName: process.env.COURSES_TABLE,
  });
  let response = await docClient.send(command);
  const courses = response.Items.map((record) => unmarshall(record));
  return httpResponse(200, courses);
};

export const getCoursesById = async (courseIds) => {
  const command = new ScanCommand({
    TableName: process.env.COURSES_TABLE,
  });
  let response = await docClient.send(command);
  const courses = response.Items.map((record) => unmarshall(record));
  const registeredCourses = courses.filter((course) =>
    courseIds.includes(course.id)
  );
  return httpResponse(200, registeredCourses);
};

export const getCourseById = async (courseId) => {
  const command = new GetItemCommand({
    TableName: process.env.COURSES_TABLE,
    Key: {
      id: { S: courseId },
    },
  });
  try {
    const data = await docClient.send(command);
    if (data.Item) {
      return httpResponse(200, unmarshall(data.Item));
    } else {
      return httpResponse(404, { message: "Course not found" });
    }
  } catch (error) {
    console.error("Error querying DynamoDB:", error);
    return httpResponse(500, { error: "Internal server error" });
  }
};
