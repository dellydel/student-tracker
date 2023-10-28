import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { heroText, heroCallToAction } from "../data/homeContent";
import { scroller } from "react-scroll"; 

const heroStyle = {
	backgroundImage: "url('images/code.jpg')",
	backgroundBlendMode: "darken",
	backgroundColor: " rgba(0, 0, 0, 0.6)",
	backgroundRepeat: "no-repeat",
	backgroundPositionX: "center",
	backgroundPositionY: "top",
	backgroundSize: "cover",
	p: 15,
	pt: 10,
};

const MainHero = () => {
	const random = Math.floor(Math.random() * heroCallToAction.length);
	const callToAction = heroCallToAction[random];
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const scrollToFooter = () => {
		
		scroller.scrollTo("footer", {
		  duration: 800, 
		  delay: 0, 
		  smooth: "easeInOutQuart", 
		});
	}
	return (
		<Box sx={{ ...heroStyle, p: { xs: 5, md: 15 } }}>
			<Box
				sx={{
					textAlign: "left",
					maxWidth: "1050px",
					margin: "0 auto",
				}}
			>
				{!matches && (
					<Typography
						variant="h2"
						color="white"
						sx={{
							display: "inline",
							fontWeight: "bold",
							mr: 3,
						}}
					>
						{callToAction.text[0]}
					</Typography>
				)}
				<Typography
					variant="h2"
					color="primary"
					sx={{
						display: "inline",
						fontWeight: "bold",
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
						BROWSE COURSES
					</Button>
					<Button
						sx={{
							m: 1,
							p: 2,
							color: "white",
						}}
						variant="contained"
						size="medium"
						onClick={scrollToFooter}
					>
						CONTACT US
					</Button>
				</Box>
			</Box>
		</Box>
	);
};

export default MainHero;
