import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const PaymentSuccessful = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState(null);
	const [customerEmail, setCustomerEmail] = useState("");

	useEffect(() => {
		const queryString = window.location.search;
		const urlParams = new URLSearchParams(queryString);
		const sessionId = urlParams.get("session_id");

		fetch(
			`https://jhp99bx2t6.execute-api.us-east-1.amazonaws.com/development/pay?session_id=${sessionId}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setStatus(data.body.status);
				setCustomerEmail(data.body.customer_email);
			});
	}, []);

	if (status === "open") {
		navigate("/checkout");
	}

	if (status === "complete") {
		return (
			<Box
				sx={{
					maxWidth: "1050px",
					margin: "50px auto",
					padding: "0 20px",
					minHeight: 1000,
				}}
			>
				<Typography variant="p">
					We appreciate your business! A confirmation email will be sent to{" "}
					{customerEmail}. If you have any questions, please email{" "}
					<a href="mailto:orders@example.com">orders@example.com</a>.
				</Typography>
				<Box sx={{ mt: 3 }}>
					<Button
						variant="contained"
						size="medium"
						href="/courses"
						sx={{
							my: 1,
							p: 2,
							color: "white",
						}}
					>
						VIEW MORE COURSES
					</Button>
				</Box>
			</Box>
		);
	}

	return null;
};

export default PaymentSuccessful;
