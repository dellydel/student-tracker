"use client";

import React from "react";
import { Typography, Box, Paper, Link } from "@mui/material";
import { useSearchParams } from "next/navigation";

const Error = () => {
	const params = useSearchParams();
	const type = params.get("type");
	let errorMessage = "";
	switch (type) {
		case "not_found":
			errorMessage = "An error has occured: Not found";
			break;
		default:
			errorMessage = "An error has occured";
			break;
	}
	return (
		<Box
			sx={{
				display: "flex",
				justifyContent: "center",
				alignItems: "flex-start",
				height: "100vh",
			}}
		>
			<Paper
				elevation={10}
				sx={{
					textAlign: "center",
					padding: 10,
					mt: 25,
					borderTop: "10px solid black",
				}}
			>
				<Typography variant="h4" gutterBottom>
					Oops! Something went wrong.
				</Typography>
				<Typography variant="body1">{errorMessage}</Typography>
				<Box sx={{ mt: 3 }}>
					<Link href="/" style={{ textDecoration: "underline" }}>
						Return home
					</Link>
				</Box>
			</Paper>
		</Box>
	);
};

export default Error;
