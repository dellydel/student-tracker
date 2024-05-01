import httpResponse from "./http_response.js";

export const handler = async (event) => {
  return httpResponse(200, "Hello from Nextbyte");
};
