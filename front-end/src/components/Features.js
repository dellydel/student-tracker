import React from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import { Box } from "@mui/material";
import { ourTrainingContent, ourPricingContent } from "../data/featureContent";
import Feature from "./Feature";

const Features = () => {
	const [parent, enableAnimations] = useAutoAnimate();

	return (
		<Box sx={{ mb: 10 }} ref={parent}>
			<Feature textPosition="left" content={ourTrainingContent} />
			<Feature textPosition="right" content={ourPricingContent} />
		</Box>
	);
};

export default Features;
