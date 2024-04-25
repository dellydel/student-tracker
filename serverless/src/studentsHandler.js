import httpResponse from "./http_response.js";
import { submitRegistration, getStudentById } from "./students.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "POST":
        const body = JSON.parse(event.body);
        return await submitRegistration(body);
      case "GET":
        if (
          event.queryStringParameters &&
          event.queryStringParameters.studentId
        ) {
          const studentId = event.pathParameters.studentId;
          return await getStudentById(studentId);
        }
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
