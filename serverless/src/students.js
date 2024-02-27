import AWS from "aws-sdk";
import httpResponse from "./http_response";

export const handler = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  const method = event.httpMethod;
  switch (method) {
    case "POST":
      const postParams = {
        TableName: process.env.STUDENTS_TABLE,
        Item: JSON.parse(event.body),
      };
      try {
        await docClient.put(postParams).promise();
        return httpResponse(
          201,
          "Thank you for registering with NextByte. A validation code has been sent to your email address."
        );
      } catch (err) {
        return httpResponse(err.statusCode, err.message);
      }
    case "GET":
      const studentId = event.pathParameters.studentId;
      const getParams = {
        TableName: process.env.STUDENTS_TABLE,
        Key: {
          id: studentId,
        },
      };
      try {
        let student = await docClient.get(getParams).promise();
        return httpResponse(200, student);
      } catch (error) {
        console.error("Error retrieving student information:", error);
        return httpResponse(
          error.statusCode,
          "Error retrieving student information"
        );
      }
  }
};
