import httpResponse from "./http_response.js";
import {
  submitRegistration,
  getStudentById,
  getStudentByEmail,
} from "./students.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "POST":
        const body = JSON.parse(event.body);
        return await submitRegistration(body);
      case "GET":
        if (event.pathParameters && event.pathParameters.studentId) {
          const studentId = event.pathParameters.studentId;
          return await getStudentById(studentId);
        } else if (
          event.queryStringParameters &&
          event.queryStringParameters.email
        ) {
          const email = event.queryStringParameters.email;
          return await getStudentByEmail(email);
        } else {
          return httpResponse(400, "Invalid request");
        }
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
