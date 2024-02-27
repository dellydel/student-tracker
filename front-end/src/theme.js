"use client";

import { createTheme } from "@mui/material/styles";
import { Rubik } from "next/font/google";

const rubik = Rubik({ subsets: ["latin"] });

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: rubik.style.fontFamily,
		},
	},
});

export default theme;
