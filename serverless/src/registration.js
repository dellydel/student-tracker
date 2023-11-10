const AWS = require("aws-sdk");
const { httpResponse } = require("./http_response");
exports.handler = async (event) => {
  const docClient = new AWS.DynamoDB.DocumentClient();
  let body;
  let statusCode = 201;
  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "OPTIONS,POST,GET",
  };
  let obj = JSON.parse(event.body);
  const firstName = obj.firstName;
  const lastName = obj.lastName;
  const phoneNumber = obj.phoneNumber;
  const email = obj.email;
  const street = obj.street;
  const city = obj.city;
  const state = obj.state;
  const zip = obj.zip;
  const country = obj.country;
  const dateOfBirth = obj.dateOfBirth;
  const password = obj.password;
  const confirmPassword = obj.confirmPassword;
  const params = {
    TableName: "next-byte-Registrations-development",
    Item: {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      street: street,
      city: city,
      state: state,
      zip: zip,
      country: country,
      dateOfBirth: dateOfBirth,
      password: password,
      confirmPassword: confirmPassword,
    },
  };
  try {
    body = await docClient.put(params).promise();
    body = "Registration was Successfull !";
  } catch (err) {
    statusCode = err.statusCode;
    body = err.message;
  }
  return httpResponse(statusCode, headers, body);
};
