import React from "react";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Header from "../components/Header";
import MainHero from "../components/MainHero";
import { Box } from "@mui/material";
import Pricing from "../components/Pricing";
import Testimonials from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <Box>
        <Header />
        <MainHero />
      </Box>
      <Features />
      <Testimonials />
      <Pricing />
      <Footer />
    </>
  );
};

export default Home;
