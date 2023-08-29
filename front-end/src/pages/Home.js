import React from "react";

// import About from "../components/About";
// import Canvas from "../components/Canvas";
// import Features from "../components/Features";
import Header from "../components/Header";
// import LazyShow from "../components/LazyShow";
import MainHero from "../components/MainHero";
import MainHeroImage from "../components/MainHeroImage";
import { Grid, Box } from "@mui/material";
// import Pricing from "../components/Pricing";
// import Product from "../components/Product";

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
      {/* <Canvas />
      <LazyShow>
        <>
          <Product />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <>
          <Features />
          <Canvas />
        </>
      </LazyShow>
      <LazyShow>
        <Pricing />
      </LazyShow>
      <LazyShow>
        <>
          <Canvas />
          <About />
        </>
      </LazyShow>
      <Analytics /> */}
    </Grid>
  );
};

export default Home;
