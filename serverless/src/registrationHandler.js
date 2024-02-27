import httpResponse from "./http_response.js";
import {
  createCourseRegistration,
  getRegistrationByEmail,
} from "./registration.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "POST":
        const body = JSON.parse(event.body);
        return await createCourseRegistration(body);
      case "GET":
        if (event.queryStringParameters && event.queryStringParameters.email) {
          const email = decodeURIComponent(event.queryStringParameters.email);
          return await getRegistrationByEmail(email);
        }
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
