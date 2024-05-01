import json

def httpResponse(statusCode, body):
  return {
    "statusCode": statusCode,
    "headers": {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET,DELETE",
    },
    "body": json.dumps(body),
  }



def handler(event):
  return httpResponse(200, "Hello from Nextbyte")



