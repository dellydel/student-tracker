import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { heroText } from "../data/homeContent";

const heroStyle = {
	backgroundImage: "url(https://picsum.photos/id/4/1600/500)",
	backgroundRepeat: "no-repeat",
	backgroundPositionX: "center",
	backgroundPositionY: "top",
	backgroundSize: "cover",
	padding: 15,
	marginBottom: 5,
};

const MainHero = () => {
	return (
		<Box sx={heroStyle}>
			<Box
				sx={{
					textAlign: "left",
					maxWidth: "1050px",
					margin: "0 auto",
					padding: "0 20px",
				}}
			>
				<Typography
					variant="h2"
					color="white"
					sx={{
						fontWeight: "bold",
					}}
				>
					NextByte
				</Typography>
				<Typography variant="h2" color={"primary"} sx={{ fontWeight: "bold" }}>
					Training and Consulting
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
					<Button
						sx={{ px: 2 }}
						variant="contained"
						size="medium"
						href="/courses"
					>
						BROWSE COURSES
					</Button>
					<Button sx={{ m: 1, p: 2 }} variant="text" size="large">
						CONTACT US
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default MainHero;
