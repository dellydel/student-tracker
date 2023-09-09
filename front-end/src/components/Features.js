import React from "react";
import { Box, Typography } from "@mui/material";
import Divider from "./Divider";

const Features = () => {
  return (
    <Box>
      <Box sx={{ width: "800px", m: "auto", mx: "auto" }}>
        <Typography
          variant="h3"
          color={"primary"}
          sx={{
            fontWeight: "bold",
            mt: 2,
          }}
        >
          Introduction to Web Development
        </Typography>

        <Divider />
        {/* <div className={`flex flex-wrap`}>
          <div className={`w-5/6 sm:w-1/2 p-6 mt-20`}>
            <h3
              className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
            >
              {firstItem?.title}
            </h3>
            <p className={`text-gray-600`}>{firstItem?.description}</p>
          </div>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={firstItem?.img}
              alt={firstItem?.title}
            />
          </div>
        </div>
        <div className={`flex flex-wrap flex-col-reverse sm:flex-row`}>
          <div className={`w-full sm:w-1/2 p-6`}>
            <img
              className="h-6/6"
              src={secondItem?.img}
              alt={secondItem?.title}
            />
          </div>
          <div className={`w-full sm:w-1/2 p-6 mt-20`}>
            <div className={`align-middle`}>
              <h3
                className={`text-3xl text-gray-800 font-bold leading-none mb-3`}
              >
                {secondItem?.title}
              </h3>
              <p className={`text-gray-600 mb-8`}>{secondItem?.description}</p>
            </div>
          </div>
        </div> */}
      </Box>
    </Box>
  );
};

export default Features;
