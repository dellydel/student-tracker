import React from "react";
import { Box, Typography } from "@mui/material";

const SectionDivider = ({ SectionTitle }) => {
	return (
		<Box
			sx={{
				my: 4,
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			<Typography variant="h4" color="primary" sx={{ fontWeight: 600 }}>
				{SectionTitle}
			</Typography>
		</Box>
	);
};

export default SectionDivider;
