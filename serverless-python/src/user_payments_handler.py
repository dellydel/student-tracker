from error_handler import handle_client_error
from botocore.exceptions import ClientError
from user_payments import retrievePayments

def handler(event, _):
  query_params = event.get('queryStringParameters', {})
  email = query_params.get('email')
  try:
      return retrievePayments(email)
  except ClientError as err:
      handle_client_error(err)
