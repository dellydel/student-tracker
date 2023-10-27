import React from "react";
import { Box, Typography } from "@mui/material";

const SectionDivider = ({ SectionTitle }) => {
	return (
		<Box
			sx={{
				my: { xs: 5, md: 5 },
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				padding: "20px",
			}}
		>
			<Typography variant="h4" sx={{ fontWeight: 600 }}>
				{SectionTitle}
			</Typography>
		</Box>
	);
};

export default SectionDivider;
