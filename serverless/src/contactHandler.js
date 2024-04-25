import httpResponse from "./http_response.js";
import { processContactRequest } from "./contact.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "POST":
        const body = JSON.parse(event.body);
        const { name, email, message } = body;
        return await processContactRequest(name, email, message);
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
