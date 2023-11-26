const AWS = require("aws-sdk");
const httpResponse = require("./http_response");

exports.handler = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: process.env.COURSES_TABLE,
  };

  let body;
  let statusCode = 200;

  try {
    body = await docClient.scan(params).promise();
  } catch (err) {
    statusCode = err.statusCode;
    body = err.message;
  }
  return httpResponse(statusCode, body);
};
