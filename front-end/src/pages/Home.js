import React from "react";
import { Box } from "@mui/material";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
//import Pricing from "../components/Pricing";
import SectionDivider from "../components/SectionDivider";
import Testimonials from "../components/Testimonials";

const Home = () => {
	const container = {
		maxWidth: "1050px",
		px: { xs: 5, md: 15 },
		pt: 5,
		m: { xs: 0, md: "0 auto" },
	};

	return (
		<>
			<MainHero />
			<Box sx={container}>
				<SectionDivider SectionTitle="Why NextByte?" />
				<Features />
				<br />
				{/* <SectionDivider SectionTitle="Upcoming Courses" /> */}
				{/* <Pricing /> */}
				<SectionDivider SectionTitle="Testimonials" />
				<Testimonials />
			</Box>
		</>
	);
};

export default Home;
