import httpResponse from "./http_response";

export const handler = async (event) => {
  return httpResponse(200, "Hello from Nextbyte");
};
