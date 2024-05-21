import httpResponse from "./http_response.js";
import { retrievePayments } from "./userPayments.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "GET":
        const email = event.queryStringParameters.email;
        return await retrievePayments(email);
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
