import React from "react";
import { Box } from "@mui/material";
import { ourTrainingContent, ourPricingContent } from "../data/featureContent";
import Feature from "./Feature";

const Features = () => {
	return (
		<Box sx={{ mb: 10 }}>
			<Feature textPosition="left" content={ourTrainingContent} />
			<Feature textPosition="right" content={ourPricingContent} />
		</Box>
	);
};

export default Features;
