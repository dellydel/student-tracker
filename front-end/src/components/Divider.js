import React from "react";
import { Box } from "@mui/material";

const Divider = ({ width = "300px" }) => {
  return (
    <div sx={{ width: "100%", mb: 4 }}>
      <Box
        variant="h1"
        sx={{ mx: "auto", width: width, opacity: 25, my: 0, py: 0, mb: 10 }}
      />
    </div>
  );
};

export default Divider;
