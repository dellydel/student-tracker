import React from "react";
import { Box, Button, Typography } from "@mui/material";
const MainHero = () => {
  return (
    <Box sx={{ marginTop: 18, px: 20, maxWidth: "650px" }}>
      <Box sx={{ textAlign: "left" }}>
        <Typography
          variant="h2"
          color="white"
          sx={{
            display: "inline-block",
            fontWeight: "bold",
            mb: 1,
          }}
        >
          Next Byte
        </Typography>
        <Typography
          variant="h2"
          color={"primary"}
          sx={{ display: "block", fontWeight: "bold", mb: 3 }}
        >
          Training and Consulting
        </Typography>
        <Typography sx={{ fontSize: 18, mt: 3, color: "white" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec odio
          purus, blandit ac eleifend a, aliquam tempor neque. Aenean ex velit,
          aliquam quis egestas sit amet, blandit id erat. Duis tempus dolor nec
          turpis placerat tempor. Praesent ante lorem, viverra ac purus a,
          vulputate viverra odio. Vestibulum nec urna auctor urna elementum
          ultricies.
        </Typography>
        <Box sx={{ mt: 5, display: "flex", justifyContent: "flex-start" }}>
          <Button sx={{ m: 1, p: 2 }} variant="contained" size="large">
            Get Started
          </Button>
          <Button sx={{ m: 1, p: 2 }} variant="text" size="large">
            Contact Us
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainHero;
