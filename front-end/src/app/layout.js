"use client";

import { Box } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { AuthProvider } from "../context/AuthContext";
import TanstackProvider from "../providers/TanstackProvider";
import theme from "../theme";

const RootLayout = ({ children, pageProps }) => {
	return (
		<html lang="en">
			<body>
				<TanstackProvider>
					<AppRouterCacheProvider>
						<AuthProvider>
							<ThemeProvider theme={theme}>
								<CssBaseline />
								<Box
									sx={{
										display: "flex",
										flexDirection: "column",
										minHeight: "100vh",
									}}
								>
									<div style={{ flex: 1 }}>
										<Navigation />
										{children}
									</div>
									<Footer />
								</Box>
							</ThemeProvider>
						</AuthProvider>
					</AppRouterCacheProvider>
				</TanstackProvider>
			</body>
		</html>
	);
};

export default RootLayout;
