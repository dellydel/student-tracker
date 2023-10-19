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
			"https://vyif56gr4u3kffmw5oewytyxra0byukl.lambda-url.us-east-1.on.aws/",
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
		<Box sx={{ m: 5 }}>
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
