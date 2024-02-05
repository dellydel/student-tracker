import React from "react";
import { Link } from "react-router-dom";
import { scroller } from "react-scroll";
import { Box, Button, Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { heroText, heroCallToAction } from "../data/homeContent";

const heroStyle = {
	backgroundImage: "url('images/code-laptop-bg.png')",
	backgroundBlendMode: "darken",
	backgroundColor: " rgba(0, 0, 0, 0.1)",
	backgroundRepeat: "no-repeat",
	backgroundPositionX: "center",
	backgroundPositionY: "top",
	backgroundSize: "cover",
	p: 15,
	pt: 10,
};
const avatarStyle = {
	height: 32,
	width: 32,
	weight: 1000,
	border: 2,
	color: "white",
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
	};
	return (
		<Box sx={{ ...heroStyle, p: { xs: 5, md: 15 } }}>
			<Box
				sx={{
					textAlign: "center",
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
				<Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
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
				</Box>
				<Box sx={{ mt: 3, display: "flex", justifyContent: "center" }}>
					<Button
						component={Link}
						variant="outlined"
						to="/courses"
						sx={{
							my: 1,
							p: 2,
							color: "white",
							borderRadius: "10px",
							textTransform: "none",
							fontSize: 20,
							weight: 500,
						}}
					>
						{`Browse Courses`}
					</Button>
					<Button
						sx={{
							m: 1,
							p: 2,
							color: "white",
							textTransform: "none",
							fontSize: 20,
							weight: 500,
						}}
						variant="text"
						onClick={scrollToFooter}
					>
						{`Contact Us`}
					</Button>
				</Box>
				<Box
					sx={{
						mt: 12,
						display: "flex",
						gap: 0,
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					<Stack direction="row" spacing={-2}>
						<Avatar
							sx={{
								...avatarStyle,
							}}
							alt="Remy Sharp"
							src="/images/avatar/Ellipse1.png"
						/>
						<Avatar
							sx={{
								...avatarStyle,
							}}
							alt="Travis Howard"
							src="/images/avatar/Ellipse2.png"
						/>
						<Avatar
							sx={{
								...avatarStyle,
							}}
							alt="Cindy Baker"
							src="/images/avatar/Ellipse3.png"
						/>
						<Avatar
							sx={{
								...avatarStyle,
							}}
							alt="Travis Howard"
							src="/images/avatar/Ellipse4.png"
						/>
						<Avatar
							sx={{
								...avatarStyle,
							}}
							alt="2k+"
							src="/images/avatar/2k+.png"
						/>
					</Stack>
					<Typography
						sx={{
							fontFamily: "sans-serif",
							fontSize: 16,
							weight: 400,
							m: 2,
							color: "white",
						}}
					>
						{`Trusted by 2000+ students worldwide`}
					</Typography>
				</Box>
			</Box>
		</Box>
	);
};

export default MainHero;
