"use client";

import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import Features from "../components/Features";
import MainHero from "../components/MainHero";
import SectionDivider from "../components/SectionDivider";

//import Testimonials from "../components/Testimonials";

const Home = () => {
	const [hydrated, setHydrated] = useState(false);
	useEffect(() => {
		setHydrated(true);
	}, []);

	const container = {
		maxWidth: "1050px",
		px: { xs: 5, md: 15 },
		pt: { xs: 0, md: 5 },
		m: { xs: 0, md: "0 auto" },
	};

	return (
		<>
			{hydrated && <MainHero />}
			<Box sx={container}>
				<SectionDivider SectionTitle="Why NextByte?" />
				<Features />
				<br />
				{/* <SectionDivider SectionTitle="Testimonials" />
				<Testimonials /> */}
			</Box>
		</>
	);
};

export default Home;
