const Stripe = require("stripe");

const stripe = Stripe(process.env.STRIPE_SECRET);

exports.handler = async (event) => {
  const method = event.requestContext.http.method;

  switch (method) {
    case "POST":
      try {
        const created_session = await stripe.checkout.sessions.create({
          ui_mode: "embedded",
          line_items: [
            {
              price: "price_1NqRYKLoiLBmpxqijmLxioki",
              quantity: 1,
            },
          ],
          mode: "payment",
          return_url:
            "http://localhost:3000/payment-complete?session_id={CHECKOUT_SESSION_ID}",
          automatic_tax: { enabled: false },
        });
        return {
          body: created_session.client_secret,
        };
      } catch (err) {
        console.log("err", err);
      }
      break;
    case "GET":
      const retrieved_session = await stripe.checkout.sessions.retrieve(
        event.queryStringParameters.session_id
      );
      return {
        statusCode: 200,
        body: {
          status: retrieved_session.status,
          customer_email: retrieved_session.customer_details.email,
        },
      };
  }
};
