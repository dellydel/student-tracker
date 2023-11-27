const AWS = require("aws-sdk");
const httpResponse = require("./http_response");

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  const method = event.httpMethod;
  const params = {
    TableName: process.env.COURSES_TABLE,
  };

  try {
    let courses = await docClient.scan(params).promise();
    switch (method) {
      case "POST":
        const body = JSON.parse(event.body);
        const registeredCourses = courses.Items.filter((course) =>
          body.courseIds.includes(course.id)
        );
        return httpResponse(200, registeredCourses.Items);
      case "GET":
        return httpResponse(200, courses);
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
