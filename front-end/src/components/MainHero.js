import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { heroText, heroCallToAction } from "../data/homeContent";

const heroStyle = {
	backgroundImage: "url('images/code.jpg')",
	backgroundBlendMode: "darken",
	backgroundColor: " rgba(0, 0, 0, 0.6)",
	backgroundRepeat: "no-repeat",
	backgroundPositionX: "center",
	backgroundPositionY: "top",
	backgroundSize: "cover",
	p: 15,
	pt: 25,
	marginBottom: 5,
};

const MainHero = () => {
	const random = Math.floor(Math.random() * heroCallToAction.length);
	const callToAction = heroCallToAction[random];

	return (
		<Box sx={heroStyle}>
			<Box
				sx={{
					textAlign: "left",
					maxWidth: "1050px",
					margin: "0 auto",
				}}
			>
				<Typography
					variant="h2"
					color="white"
					sx={{
						display: "inline",
						fontWeight: "bold",
					}}
				>
					{callToAction.text[0]}
				</Typography>
				<Typography
					variant="h2"
					color="primary"
					sx={{
						display: "inline",
						fontWeight: "bold",
						ml: 3,
					}}
				>
					{callToAction.text[1]}
				</Typography>
				<Typography
					sx={{
						fontSize: 18,
						mt: 2,
						color: "white",
						width: { md: "100%", lg: "50%" },
					}}
				>
					{heroText}
				</Typography>
				<Box sx={{ mt: 3, display: "flex", justifyContent: "flex-start" }}>
					<Button variant="contained" size="medium" href="/courses">
						BROWSE COURSES
					</Button>
					<Button
						sx={{ m: 1, p: 2, color: "white" }}
						variant="text"
						size="medium"
					>
						CONTACT US
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default MainHero;
