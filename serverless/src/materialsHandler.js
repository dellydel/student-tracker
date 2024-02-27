import { getCourseMaterials } from "./materials.js";
import httpResponse from "./http_response.js";

export const handler = async (event) => {
  try {
    return await getCourseMaterials();
  } catch (err) {
    return httpResponse(err.statusCode, err.message);
  }
};
