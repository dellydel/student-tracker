import Stripe from "stripe";
import httpResponse from "./http_response.js";
const stripe = Stripe(process.env.STRIPE_SECRET);

export const handler = async (event) => {
  const method = event.httpMethod;
  switch (method) {
    case "POST":
      try {
        const body = JSON.parse(event.body);
        const created_session = await stripe.checkout.sessions.create({
          ui_mode: "embedded",
          line_items: [
            {
              price: body.price_id,
              quantity: 1,
            },
          ],
          mode: "payment",
          return_url: `https://${process.env.NEXTBYTE_URL}/payment-complete?session_id={CHECKOUT_SESSION_ID}`,
          automatic_tax: { enabled: false },
          payment_intent_data: {
            metadata: {
              product_id: body.product_id,
              course_name: body.course_name,
              price: body.price,
            },
          },
          customer_email: body.user_email,
        });
        return httpResponse(200, created_session.client_secret);
      } catch (err) {
        console.log("error when posting payment", err);
        return httpResponse(500, err);
      }
    case "GET":
      try {
        const retrieved_session = await stripe.checkout.sessions.retrieve(
          event.queryStringParameters.session_id,
          {
            expand: ["payment_intent"],
          }
        );
        return httpResponse(200, {
          status: retrieved_session.status,
          email: retrieved_session.customer_details.email,
        });
      } catch (err) {
        console.log("error when attempting to retrieve session", err);
        return httpResponse(500, err);
      }
  }
};
