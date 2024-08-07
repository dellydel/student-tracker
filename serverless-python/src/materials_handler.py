from botocore.exceptions import ClientError
from src.materials import get_course_materials
from src.http_response import create_response

def handler(event, context):
    query_params = event.get('queryStringParameters', {})
    topic = query_params.get('topic')
    try:
        return get_course_materials(topic)
    except ClientError as err:
      statusCode = err.statusCode if hasattr(err, 'statusCode') else 500
      message = err.message if hasattr(err, 'message') else 'Internal Server Error'
      return create_response(statusCode, message)

