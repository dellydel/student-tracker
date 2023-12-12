const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const httpResponse = require("./http_response");

exports.handler = async (event) => {
  const params = {
    Bucket: "nextbyte-course-materials",
    Prefix: "cybersecurity",
  };

  try {
    const files = [];
    const data = await s3.listObjectsV2(params).promise();
    if (data.IsTruncated) {
      throw new Error("Course Materials List truncated");
    }
    const objects = data.Contents.filter((item) => item.Key.substr(-1) !== "/");

    for (const item of objects) {
      let params = {
        Bucket: "nextbyte-course-materials",
        Key: item.Key,
        Expires: 1800,
      };
      const url = await s3.getSignedUrlPromise("getObject", params);
      files.push({ name: item.Key, url: url });
    }
    return httpResponse(200, files);
  } catch (error) {
    console.error("Error fetching S3 contents:", error);
    return httpResponse(500, { error: "Internal Server Error" });
  }
};
