import React from "react";
import { Element } from "react-scroll";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Box, List, Typography } from "@mui/material";

const footerText = {
	color: "white",
	fontWeight: "bold",
	fontSize: "1.2rem",
};

const Footer = () => {
	return (
		<Element name="footer">
			<Box
				sx={{
					p: 5,
					minHeight: "100px",
					backgroundColor: "#1976d2",
					color: "white",
				}}
			>
				<Box
					sx={{
						maxWidth: "1050px",
						margin: "0 auto",
						display: "flex",
						flexDirection: "row",
						justifyContent: "flex-start",
						flexWrap: "wrap",
					}}
				>
					<Box
						sx={{
							display: "flex",
							flexDirection: "row",
							alignItems: "center",
							flex: 1,
						}}
					>
						<Typography sx={{ ...footerText, mr: 1 }}>Follow us on </Typography>
						<InstagramIcon />
					</Box>
					<Box sx={{ flex: 1, textAlign: "right" }}>
						<List sx={{ ...footerText, listStyle: "none" }}>
							<li>
								Nextbyte, LLC
								<br />
								Dallas, TX
							</li>
							<br />
							<br />
							<li>Contact: admin @ nextbyteweb.com</li>
						</List>
					</Box>
				</Box>
			</Box>
		</Element>
	);
};

export default Footer;
