const AWS = require("aws-sdk");
const httpResponse = require("./http_response");

exports.handler = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: process.env.STUDENTS_TABLE,
    Item: JSON.parse(event.body),
  };
  try {
    await docClient.put(params).promise();
    return httpResponse(201, "Thank you for registering with NextByte.");
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
