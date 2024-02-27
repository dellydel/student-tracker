import { ListObjectsV2Command, S3Client } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import httpResponse from "./http_response.js";
import { GetObjectCommand } from "@aws-sdk/client-s3";

const client = new S3Client();

const listAllMaterials = async () => {
  const input = {
    Bucket: "nextbyte-course-materials",
    Prefix: "cybersecurity",
  };
  const command = new ListObjectsV2Command(input);
  const data = await client.send(command);
  if (data.IsTruncated) {
    throw new Error("Course Materials List truncated");
  }
  const objects = data.Contents.filter((item) => item.Key.substr(-1) !== "/");
  return objects;
};

const getPresignedUrls = async (objects) => {
  const files = [];
  for (const item of objects) {
    let command = new GetObjectCommand({
      Bucket: "nextbyte-course-materials",
      Key: item.Key,
    });
    const url = await getSignedUrl(client, command, { expiresIn: 1800 });
    files.push({ name: item.Key, url: url });
  }
  return files;
};

export const getCourseMaterials = async () => {
  try {
    const objects = await listAllMaterials();
    const files = await getPresignedUrls(objects);
    return httpResponse(200, files);
  } catch (error) {
    console.error("Error fetching S3 contents:", error);
    return httpResponse(500, { error: "Internal Server Error" });
  }
};
