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
        const { courseIds } = JSON.parse(event.body);
        const registeredCourses = courses.Items.filter((course) =>
          courseIds.includes(course.id)
        );
        return httpResponse(200, registeredCourses);
      case "GET":
        return httpResponse(200, courses);
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
