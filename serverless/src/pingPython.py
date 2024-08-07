import os
from http_response import create_response

def handler():
    try:
        message = f"Hello from Nextbyte ({os.environ.get('ENVIRONMENT', 'default')})"
        return create_response(200, message)
    except Exception as e:
        print(f"Error occurred in handler: {e}")
        return create_response(500, "Internal Server Error")
