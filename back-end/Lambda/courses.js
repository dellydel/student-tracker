const AWS = require("aws-sdk");

exports.handler = async (event) => {
  console.log(event, "event");

  const docClient = new AWS.DynamoDB.DocumentClient();

  const params = {
    TableName: "next-byte-Courses-development",
  };

  let body;
  let statusCode = 200;

  try {
    body = await docClient.scan(params).promise();
  } catch (err) {
    statusCode = err.statusCode;
    body = err.message;
  }
  return {
    statusCode: statusCode,
    body: JSON.stringify(body),
  };
};
