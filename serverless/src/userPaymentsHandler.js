import httpResponse from "./http_response.js";
import { retrievePayments } from "./userPayments.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "GET":
        const customerId = event.queryStringParameters.customer_id;
        return await retrievePayments(customerId);
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
