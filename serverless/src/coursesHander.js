const AWS = require("aws-sdk");
const httpResponse = require("./http_response");
const { getCourseById, getAllCourses, getCoursesById } = require("./courses");

const docClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "POST":
        const { courseIds } = JSON.parse(event.body);
        return getCoursesById(courseIds);
      case "GET":
        if (event.pathParameters && event.pathParameters.courseId) {
          const { courseId } = event.pathParameters;
          return getCourseById(courseId);
        } else if (!event.pathParameters) {
          return getAllCourses();
        }
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
