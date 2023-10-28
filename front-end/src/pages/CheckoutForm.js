import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import {
	EmbeddedCheckoutProvider,
	EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
	"pk_test_51NpN43LoiLBmpxqifOYqQuagPOWXBfGFI4qaGqhcMN84DzYFC1RPCb1F1SOAgiSFL0owHIe23ylwHszp1Dt8n09u00I0KLUkzx",
);

const CheckoutForm = () => {
	const [clientSecret, setClientSecret] = useState("");

	useEffect(() => {
		fetch(
			"https://jhp99bx2t6.execute-api.us-east-1.amazonaws.com/development/pay",
			{
				method: "POST",
			},
		)
			.then((res) => {
				console.log(res, "res");
				return res.json();
			})
			.then((data) => {
				console.log(data, "data");
				setClientSecret(data.body);
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

export default CheckoutForm;
