import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`,
);
const CheckoutForm = () => {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/pay`, {
			method: "POST",
		})
			.then((res) => res.json())
			.then((secret) => setClientSecret(secret));
	}, []);

	return (
		<Box sx={{ m: 5, minHeight: 1000 }}>
			{clientSecret && (
				<EmbeddedCheckoutProvider
					stripe={stripePromise}
					options={{ clientSecret }}
				>
					<EmbeddedCheckout />
				</EmbeddedCheckoutProvider>
			)}
		</Box>
	);
};

export default CheckoutForm;
