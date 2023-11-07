const AWS = require("aws-sdk");
const s3 = new AWS.S3();
const httpResponse = require("./httpResponse");

exports.handler = async (event) => {
  const params = {
    Bucket: "nextbyte-course-materials",
    Key: "cybersecurity",
    Expires: 1800,
  };

  try {
    const data = await s3.listObjectsV2(params).promise();
    const documents = data.Contents.map((item) => ({
      name: item.Key,
      url: s3.getSignedUrlPromise("getObject", params),
    }));
    return httpResponse(200, documents);
  } catch (error) {
    console.error("Error fetching S3 contents:", error);
    return httpResponse(500, { error: "Internal Server Error" });
  }
};
