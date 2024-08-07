import json 
from src.http_response import create_response
from src.contact import processContactRequest

def handler(event, context):
  try: 
    match (event.httpMethod):
      case "POST":
        body = json.dumps(event.body)
        return processContactRequest(body.name, body.email, body.message)
    
  except Exception as err:
    statusCode = err.statusCode if hasattr(err, 'statusCode') else 500
    message = err.message if hasattr(err, 'message') else 'Internal Server Error'
    return create_response(statusCode, message)