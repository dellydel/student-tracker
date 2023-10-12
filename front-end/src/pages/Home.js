import React from "react";
import { Box } from "@mui/material";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
import Pricing from "../components/Pricing";
import SectionDivider from "../components/SectionDivider";
import Testimonials from "../components/Testimonials";

const Home = () => {
	return (
		<>
			<MainHero />
			<Box sx={{ maxWidth: "1050px", margin: "0 auto", padding: "0 20px" }}>
				<Features />
				<SectionDivider SectionTitle="Testimonials" />
				<Testimonials />
				<SectionDivider SectionTitle="Upcoming Courses" />
				<Pricing />
			</Box>
		</>
	);
};

export default Home;
