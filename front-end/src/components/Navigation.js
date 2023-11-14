import React from "react";
import { Toolbar, Link, Box, Stack, Modal } from "@mui/material";
import Avatar from "@mui/material/Avatar";
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
	bgcolor: "background.paper",
};

const Navigation = ({ isLogin }) => {
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
									<Stack sx={{ ml: 5 }} direction="row">
										<Avatar sx={{ width: 25, height: 25, mb: 2, mr: 1 }}>
											ID
										</Avatar>
										<Box sx={{ color: "white" }}>USER NAME</Box>
									</Stack>
								) : (
									<Link
										href={"#"}
										sx={{
											m: 1,
											ml: 5,
											p: 1,
											color: "white",
											textDecoration: "none",
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
