const AWS = require("aws-sdk");

exports.handler = async (event) => {
  const dbClient = new AWS.DynamoDB.DocumentClient();

  exports.handler = async (event) => {
    let body;
    let statusCode = 200;
    try {
      body = await dbClient.put(event).promise();
    } catch (err) {
      statusCode = err.statusCode;
      body = err.message;
    }
    return {
      statusCode,
      body,
    };
  };
};
