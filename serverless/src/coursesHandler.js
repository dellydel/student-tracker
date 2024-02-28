import httpResponse from "./http_response.js";
import { getCourseById, getAllCourses, getCoursesById } from "./courses.js";

export const handler = async (event) => {
  try {
    switch (event.httpMethod) {
      case "POST":
        const { courseIds } = JSON.parse(event.body);
        if (courseIds.length === 0) return httpResponse(200, []);
        return await getCoursesById(courseIds);
      case "GET":
        if (
          event.queryStringParameters &&
          event.queryStringParameters.courseId
        ) {
          const { courseId } = event.queryStringParameters;
          return await getCourseById(courseId);
        } else if (!event.queryStringParameters) {
          return await getAllCourses();
        }
    }
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
