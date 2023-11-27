import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Box } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { AuthContext } from "../context/AuthContext";

const stripePromise = loadStripe(
	`${process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY}`,
);
const CheckoutForm = () => {
	const { state } = useLocation();
	const [clientSecret, setClientSecret] = useState();
	const { isLoggedIn, user } = useContext(AuthContext);

	useEffect(() => {
		const { product_id, course_name, price, price_id } = state;
		fetch(`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/pay`, {
			method: "POST",
			body: JSON.stringify({
				product_id,
				course_name,
				price,
				price_id,
				user_email: isLoggedIn ? user : "",
			}),
		})
			.then((res) => res.json())
			.then((secret) => setClientSecret(secret));
	}, [state]);

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
