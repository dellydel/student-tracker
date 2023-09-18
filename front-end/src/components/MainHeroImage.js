import React from "react";
import { Box } from "@mui/material";

const MainHeroImage = () => {
	return (
		<Box sx={{ position: "absolute", width: "100%", left: 0, top: 0 }}>
			<img
				height={"500px"}
				width={"1600px"}
				src="https://picsum.photos/id/4/400/200"
				alt="A computer"
			/>
		</Box>
	);
};

export default MainHeroImage;
