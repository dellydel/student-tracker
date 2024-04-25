import httpResponse from "./http_response.js";
import {
  submitRegistration,
  getStudentById,
  updateStudentById,
} from "./students.js";

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
      case "PUT":
        if (
          event.pathParameters &&
          event.pathParameters.studentId &&
          event.body
        ) {
          const studentId = event.pathParameters.studentId;
          const updatedStudent = JSON.parse(event.body);
          return await updateStudentById(studentId, updatedStudent);
        }
        break;
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
