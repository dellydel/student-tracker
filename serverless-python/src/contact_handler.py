import json 
from src.http_response import create_response
from src.contact import processContactRequest
from botocore.exceptions import ClientError

def handler(event, _):
  try:
    body = json.loads(event["body"])
    name = body.get("name")
    email = body.get("email")
    message = body.get("message")
    return processContactRequest(name, email, message)
  except ClientError as err:
    statusCode = err.statusCode if hasattr(err, 'statusCode') else 500
    message = err.message if hasattr(err, 'message') else 'Internal Server Error'
    return create_response(statusCode, message)