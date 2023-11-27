const AWS = require("aws-sdk");
const httpResponse = require("./http_response");
const dynamoDB = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const body = JSON.parse(event.body);
  if (body.type === "payment_intent.succeeded") {
    const paymentIntent = body.data.object;
    const { id, amount, created, receipt_email, metadata } = paymentIntent;

    const params = {
      TableName: process.env.REGISTRATIONS_TABLE,
      Item: {
        id: id,
        amount: amount,
        created: created,
        email: receipt_email,
        course_name: metadata.course_name,
        price: metadata.price,
        product_id: metadata.product_id,
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
