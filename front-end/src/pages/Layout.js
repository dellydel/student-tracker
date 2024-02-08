import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const Layout = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				background: "black",
			}}
		>
			<div style={{ flex: 1 }}>
				<Navigation />
				<Outlet />
			</div>
			<Footer />
		</Box>
	);
};

export default Layout;
