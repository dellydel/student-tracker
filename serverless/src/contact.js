import httpResponse from "./http_response.js";

export const processContactRequest = async (name, email, message) => {
  await saveRequest(name, email, message);
  return httpResponse(
    200,
    JSON.stringify({ message: "Success! Your message has been sent." })
  );
};

const saveRequest = async (name, email, message) => {
  const params = {
    TableName: process.env.CONTACT_TABLE,
    Item: {
      name: name,
      email: email,
      message: message,
      timestamp: Date.now(),
    },
  };
  await dynamodb.put(params).promise();
};
