import boto3
import os
import stripe
from src.http_response import create_response
from botocore.exceptions import ClientError

dynamodb = boto3.client('dynamodb')

stripe = stripe(api_key=os.environ.get("STRIPE_SECRET"))

def getRegistrationByEmail(email):
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
    responseObjs = response.Items
    return create_response(200, responseObjs)
  except: 
    raise ClientError("Error when attempting to retrieve registrations")
  
def createCourseRegistration(body):
  if body.get("type").equals("payment_intent.succeeded"):
    session = body.get("data").get("object")
    try:
      checkout_session = stripe.checkout.sessions.list({
        'payment_intent': session.get("id"),
        'expand': ["data.line_items"],
      })
      lineItems = stripe.checkout.sessions.listLineItems(
        checkout_session.data[0].id
      )
      table = dynamodb.Table(os.environ.get("REGISTRATIONS_TABLE"))
      line_item = lineItems.get("data")[0]
      table.put_item(
        Item = {
          'id':session.get("id"),
          'amount': session.get("amount"),
          'created': session.get("created"),
          'email': session.get("receipt_email"),
          'emailLower': str(session.get("receipt_email")).lower(),
          'course_name': line_item.description,
          'price': line_item.price.unit_amount,
          'product_id': line_item.price.product
        }
      )
      return create_response(200, "Transaction recorded successfully.")
    except:
      raise ClientError("Error when recording transaction.")