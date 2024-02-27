import AWS from "aws-sdk";
import httpResponse from "./http_response";

const docClient = new AWS.DynamoDB.DocumentClient();

export const getAllCourses = async () => {
  const params = {
    TableName: process.env.COURSES_TABLE,
  };
  let courses = await docClient.scan(params).promise();
  return httpResponse(200, courses.Items);
};

export const getCoursesById = async (courseIds) => {
  const params = {
    TableName: process.env.COURSES_TABLE,
  };
  let courses = await docClient.scan(params).promise();
  const registeredCourses = courses.Items.filter((course) =>
    courseIds.includes(course.id)
  );
  return httpResponse(200, registeredCourses);
};

export const getCourseById = async (id) => {
  const params = {
    TableName: process.env.COURSES_TABLE,
    Key: {
      pk: id,
    },
  };
  try {
    const data = await docClient.get(params).promise();
    if (data.Item) {
      return httpResponse(200, data.Item);
    } else {
      return httpResponse(404, { message: "Course not found" });
    }
  } catch (error) {
    console.error("Error querying DynamoDB:", error);
    return httpResponse(500, { error: "Internal server error" });
  }
};
