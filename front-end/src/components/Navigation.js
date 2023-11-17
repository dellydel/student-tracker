import React from "react";
import { Toolbar, Link, Box, Modal } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Login from "./Login";

const pages = [
	{ name: "HOME", link: "/" },
	{ name: "COURSES", link: "/courses" },
];

const loginNav = {
	m: 1,
	p: 2,
	color: "white",
	textDecoration: "none",
	fontWeight: "bold",
	fontSize: "1.2rem",
};

const modalStyle = {
	position: "absolute",
	top: "50%",
	left: "50%",
	transform: "translate(-50%, -50%)",
};

const Navigation = ({ isLogin = false }) => {
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.down("md"));
	const matchesLg = useMediaQuery(theme.breakpoints.down("lg"));
	const [open, setOpen] = React.useState(false);

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Box sx={modalStyle}>
					<Login />
				</Box>
			</Modal>
			<Box sx={{ backgroundColor: "black", boxShadow: "none" }}>
				<Toolbar>
					<Box
						sx={{
							pl: { xs: 0, sm: 0, md: 8 },
							flexGrow: 1,
							display: "flex",
							justifyContent: "flex-start",
						}}
					>
						<Link
							href={"/"}
							sx={{ m: 1, p: 1, color: "white", textDecoration: "none" }}
						>
							<Box
								component="img"
								src={"/logo-white.png"}
								alt={"NextByte Logo"}
								sx={{ height: "50px", width: "auto" }}
							/>
						</Link>
					</Box>
					<Box
						sx={{
							flexGrow: 1,
							display: "flex",
							justifyContent: "flex-end",
						}}
					>
						{!matches &&
							pages.map((page) => (
								<Link
									key={page.name}
									href={page.link}
									sx={{
										m: 1,
										mr: 0,
										p: 2,
										color: "white",
										textDecoration: "none",
										fontWeight: "bold",
										fontSize: "1.2rem",
									}}
								>
									{page.name}
								</Link>
							))}
						{!matches && (
							<Box sx={loginNav}>
								|
								{isLogin ? (
									<Link
										underline="none"
										sx={{ color: "white", ml: 5, cursor: "pointer" }}
									>
										{}first name
									</Link>
								) : (
									<Link
										underline="none"
										sx={{
											m: 1,
											ml: 5,
											p: 1,
											color: "white",
											cursor: "pointer",
										}}
										onClick={() => setOpen(true)}
									>
										LOGIN {!matchesLg && "/ REGISTER"}
									</Link>
								)}
							</Box>
						)}
					</Box>
				</Toolbar>
			</Box>
		</>
	);
};

export default Navigation;
