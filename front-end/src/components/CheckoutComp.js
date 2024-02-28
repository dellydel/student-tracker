"use client";

import React from "react";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";

const stripePromise = loadStripe(
	`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`,
);

const CheckoutComp = () => {
	const searchParams = useSearchParams();
	const [clientSecret, setClientSecret] = useState();

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

export default CheckoutComp;
