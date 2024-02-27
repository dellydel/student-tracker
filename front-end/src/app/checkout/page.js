"use client";

import React, { useState, useEffect, useContext } from "react";
import { Box } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";

const stripePromise = loadStripe(
	`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
);
const CheckoutForm = () => {
	const searchParams = useSearchParams();
	const [clientSecret, setClientSecret] = useState();
	const { isLoggedIn } = useContext(AuthContext);

	useEffect(() => {
		const product_id = searchParams.get("product_id");
		const course_name = searchParams.get("course_name");
		const price = searchParams.get("price");
		const price_id = searchParams.get("price_id");
		fetch(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/pay`, {
			method: "POST",
			body: JSON.stringify({
				product_id,
				course_name,
				price,
				price_id,
			}),
		})
			.then((res) => res.json())
			.then((secret) => {
				setClientSecret(secret);
			});
	}, [isLoggedIn]);

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
