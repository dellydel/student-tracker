import React from "react";
import { Box } from "@mui/material";
import Features from "../components/Features";
import Footer from "../components/Footer";
import MainHero from "../components/MainHero";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home = () => {
	return (
		<>
			<MainHero />
			<Box sx={{ maxWidth: "1050px", margin: "0 auto", padding: "0 20px" }}>
				<Features />
				<Testimonials />
				<Pricing />
			</Box>
			<Footer />
		</>
	);
};

export default Home;
