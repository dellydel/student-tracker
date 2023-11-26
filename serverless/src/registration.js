const AWS = require("aws-sdk");
const httpResponse = require("./http_response");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  console.log(event, "event");
  if (event.type === "payment_intent.succeeded") {
    const paymentIntent = event.data.object;

    console.log("data", paymentIntent.metadata);
    const { name, email, course_id, product_id } = paymentIntent.metadata;

    const params = {
      TableName: process.env.REGISTRATIONS_TABLE,
      Item: {
        name,
        email,
        course_id,
        product_id,
        transaction_id: paymentIntent.id,
        timestamp: Date.now(),
      },
    };

    try {
      await dynamoDB.put(params).promise();
      return httpResponse(200, "Transaction recorded successfully");
    } catch (error) {
      console.error("Error recording transaction:", error);
      return httpResponse(error.statusCode, "Error recording transaction");
    }
  }

  return httpResponse(200, "Transaction was not completed successfully.");
};
