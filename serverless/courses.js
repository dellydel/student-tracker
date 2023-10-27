const AWS = require("aws-sdk");

export const handler = async (event) => {
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
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
    },
    body: JSON.stringify(body),
  };
};
