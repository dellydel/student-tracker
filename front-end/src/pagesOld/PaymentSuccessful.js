import React, { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";

const PaymentSuccessful = () => {
	const navigate = useNavigate();
	const [status, setStatus] = useState(null);
	const [customerEmail, setCustomerEmail] = useState("");
	const [searchParams] = useSearchParams();

	const sessionId = searchParams.get("session_id");

	useEffect(() => {
		fetch(
			`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/pay?session_id=${sessionId}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setStatus(data.status);
				setCustomerEmail(data.email);
			});
	}, [sessionId]);

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
					<a href="mailto:admin@nextbyteweb.com">admin@nextbyteweb.com</a>.
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
