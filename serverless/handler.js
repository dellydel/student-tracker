"use strict";

export function ping(event) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello from Serverless",
    }),
  };
}
