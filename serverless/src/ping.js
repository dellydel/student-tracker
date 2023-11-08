const httpResponse = require("./http_response");

exports.handler = async (event) => {
  return httpResponse(200, "Hello from Nextbyte");
};
