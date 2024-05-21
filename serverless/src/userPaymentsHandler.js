import httpResponse from "./http_response.js";
import { retrievePayments } from "./userPayments.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "GET":
        const email = event.queryStringParameters.email;
        const productId = event.queryStringParameters.productId;
        return await retrievePayments(email, productId);
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
