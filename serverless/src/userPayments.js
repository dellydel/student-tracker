import Stripe from "stripe";

const stripe = Stripe(process.env.STRIPE_SECRET);

export const retrievePayments = async (customerId) => {
  const paymentIntents = await stripe.paymentIntents.list({
    customer: customerId,
  });
  return paymentIntents.data.map((intent) => ({
    id: intent.id,
    amount: intent.amount,
    currency: intent.currency,
    status: intent.status,
    created: intent.created,
    description: intent.description,
  }));
};
