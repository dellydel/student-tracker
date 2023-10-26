import React from "react";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const feature = {
	display: "flex",
	alignItems: "center",
	justifyContent: "space-around",
	mb: 10,
};

const Feature = ({ textPosition, content }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));

	return (
		<Box
			sx={
				!matches
					? {
							...feature,
							flexDirection: textPosition === "left" ? "row" : "row-reverse",
					  }
					: { mb: 10 }
			}
		>
			<Box
				sx={{
					flex: 1,
					textAlign: "left",

					mr: textPosition === "left" ? 5 : 0,
				}}
			>
				<Typography variant="h5" sx={{ fontWeight: 600, fontSize: "1.5em" }}>
					{content.header}
				</Typography>
				<Typography variant="p">{content.text}</Typography>
			</Box>
			<Box
				sx={{
					flex: 1,
					textAlign: "center",
					mt: 5,
					mr: textPosition === "left" ? 0 : 5,
				}}
			>
				{content.icon}
			</Box>
		</Box>
	);
};

export default Feature;
