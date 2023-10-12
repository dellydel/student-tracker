import React from "react";
import { Box } from "@mui/material";

const footerLink = {
	width: "250px",
	textAlign: "left",
};

const Footer = () => {
	return (
		<Box
			sx={{
				minHeight: "400px",
				backgroundColor: "#1976d2",
				color: "white",
			}}
		>
			<Box
				sx={{
					maxWidth: "1050px",
					margin: "0 auto",
					pt: "50px",
					display: "flex",
					flexDirection: "row",
					justifyContent: "flex-start",
					flexWrap: "wrap",
				}}
			>
				<Box sx={footerLink}>
					<ul sx={{ listStyle: "none" }}>
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
					</ul>
				</Box>
				<Box sx={footerLink}>
					<ul>
						<li>Link 1</li>
						<li>Link 2</li>
						<li>Link 3</li>
					</ul>
				</Box>
			</Box>
		</Box>
	);
};

export default Footer;
