const AWS = require("aws-sdk");
const { httpResponse } = require("./http_response");
exports.handler = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  let body;
  let statusCode = 201;
  let obj = JSON.parse(event.body);
  const params = {
    TableName: "next-byte-Registrations-development",
    Item: { obj },
  };
  try {
    body = await docClient.put(params).promise();
    body = "Registration was Successfull !";
  } catch (err) {
    statusCode = err.statusCode;
    body = err.message;
  }
  return httpResponse(statusCode, body);
};
