from src.http_response import create_response
from botocore.exceptions import ClientError
import boto3
import os
import datetime

dynamodb = boto3.client('dynamodb')

def retrievePayments(email):
  response = dynamodb.scan(
     TableName=os.environ.get("REGISTRATIONS_TABLE"),
     FilterExpression="emailLower = :emailLower OR email = :email",
     ExpressionAttributeValues={
      ":emailLower": { "S": email.toLocaleLowerCase() },
      ":email": { "S": email },
    },
    ProjectionExpression="amount, created, course_name",
  )
  try:
    responseObjects = response['Items']
    amounts = list(map(lambda obj: {
      'date': datetime.datetime.fromtimestamp(obj['created']['N'] / 1000).strftime('%Y-%m-%d %H:%M:%S'),
      'amount': obj.amount,
      'name': obj.course_name,
    }, responseObjects))
    return create_response(200, amounts)
  except ClientError as err:
      statusCode = err.statusCode if hasattr(err, 'statusCode') else 500
      message = err.message if hasattr(err, 'message') else 'Internal Server Error'
      return create_response(statusCode, message)
  
