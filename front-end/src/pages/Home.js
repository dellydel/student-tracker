import React from "react";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Header from "../components/Header";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import { Grid, Box } from "@mui/material";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <Grid rowSpacing={5} sx={{ overflow: "hidden" }}>
      <Box>
        <Box sx={{ maxWidth: "1280px" }}>
          <Box sx={{ position: "relative", pb: 8, zIndex: 1300 }}>
            <Header />
            <MainHero />
          </Box>
        </Box>
        <MainHeroImage />
      </Box>
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </Grid>
  );
};

export default Home;
