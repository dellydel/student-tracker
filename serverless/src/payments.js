const Stripe = require("stripe");
const { httpResponse } = require("./http_response");
const stripe = Stripe(process.env.STRIPE_SECRET);

exports.handler = async (event) => {
  const method = event.httpMethod;
  switch (method) {
    case "POST":
      try {
        const created_session = await stripe.checkout.sessions.create({
          ui_mode: "embedded",
          line_items: [
            {
              price: "price_1NqRYKLoiLBmpxqijmLxioki", //This needs to be dynamic and tied to the course that is being purchased
              quantity: 1,
            },
          ],
          mode: "payment",
          return_url:
            "http://localhost:3000/payment-complete?session_id={CHECKOUT_SESSION_ID}",
          automatic_tax: { enabled: false },
        });
        return httpResponse(200, created_session.client_secret);
      } catch (err) {
        console.log("error when posting", err);
        return httpResponse(500, err);
      }
    case "GET":
      try {
        const retrieved_session = await stripe.checkout.sessions.retrieve(
          event.queryStringParameters.session_id
        );
        return httpResponse(200, {
          status: retrieved_session.status,
        });
      } catch (err) {
        console.log("error when posting", err);
        return httpResponse(500, err);
      }
  }
};
