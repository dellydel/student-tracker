import React from "react";
import { Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
import Pricing from "../components/Pricing";
import SectionDivider from "../components/SectionDivider";
import Testimonials from "../components/Testimonials";

const Home = () => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("sm"));

	return (
		<>
			<MainHero />
			<Box
				sx={{
					marginBottom: 5,
					maxWidth: "1050px",
					p: matches ? 5 : 15,
					pt: 5,
					m: matches ? 0 : "0 auto",
				}}
			>
				<SectionDivider SectionTitle="Why NextByte?" />
				<Features />
				<SectionDivider SectionTitle="Upcoming Courses" />
				<Pricing />
				<SectionDivider SectionTitle="Testimonials" />
				<Testimonials />
			</Box>
		</>
	);
};

export default Home;
