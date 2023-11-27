import React, { useContext, useEffect, useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Toolbar,
	Box,
	Modal,
	Link,
	Menu,
	MenuItem,
	Button,
	Dialog,
	DialogContent,
	DialogTitle,
	DialogContentText,
	DialogActions,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AuthContext } from "../context/AuthContext";
import Login from "./Login";

const pages = [{ name: "COURSES", link: "/courses" }];

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

const Navigation = () => {
	const { isLoggedIn, user, logout, showLogin } = useContext(AuthContext);
	const [open, setOpen] = useState(false);
	const [dialogOpen, setDialogOpen] = useState(false);
	const [anchorEl, setAnchorEl] = React.useState(null);

	useEffect(() => {
		if (showLogin) setOpen(true);
		else setOpen(false);
	}, [showLogin]);

	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<Modal open={open} onClose={() => setOpen(false)}>
				<Box sx={modalStyle}>
					<Login setOpen={setOpen} />
				</Box>
			</Modal>
			<Box sx={{ backgroundColor: "black", boxShadow: "none" }}>
				<Toolbar style={{ display: "flex" }}>
					<Box
						sx={{
							pl: { xs: 0, lg: 8 },
							display: "flex",
							flexGrow: 1,
							justifyContent: "flex-start",
						}}
					>
						<Link
							component={RouterLink}
							to="/"
							sx={{ my: 1, py: 1, color: "white", textDecoration: "none" }}
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
							display: { xs: "flex", md: "none" },
							flexGrow: 1,
							justifyContent: "flex-end",
						}}
					>
						<IconButton color="inherit" onClick={handleMenu}>
							<MenuIcon sx={{ color: "white" }} />
						</IconButton>
					</Box>
					<Box
						sx={{
							display: { xs: "none", md: "flex" },
							flexGrow: 1,
							justifyContent: "flex-end",
						}}
					>
						{pages.map((page) => (
							<Link
								component={RouterLink}
								key={page.name}
								to={page.link}
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
						{isLoggedIn && (
							<Link
								component={RouterLink}
								key={"user"}
								to={"/user"}
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
								MY COURSES
							</Link>
						)}
						<Box sx={loginNav}>
							|
							{isLoggedIn ? (
								<Link
									onClick={() => setDialogOpen(true)}
									underline="none"
									sx={{ color: "white", ml: 5, cursor: "pointer" }}
								>
									{user ?? "LOGOUT"}
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
									<Box component={"span"}>LOGIN /REGISTER</Box>
								</Link>
							)}
						</Box>
					</Box>
					<Menu
						id="menu-appbar"
						anchorEl={anchorEl}
						anchorOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						keepMounted
						transformOrigin={{
							vertical: "top",
							horizontal: "right",
						}}
						open={Boolean(anchorEl)}
						onClose={handleClose}
					>
						<MenuItem
							onClick={() => {
								handleClose();
							}}
						>
							<Button component={RouterLink} underline="none" to={"/courses"}>
								Courses
							</Button>
						</MenuItem>
						<MenuItem
							onClick={() => {
								handleClose();
							}}
						>
							<Button onClick={() => setOpen(true)}>LOGIN / REGISTER</Button>
						</MenuItem>
					</Menu>
					<Dialog open={dialogOpen} onClose={() => setDialogOpen(false)}>
						<DialogTitle>Logout</DialogTitle>
						<DialogContent>
							<DialogContentText>Would you like to log out?</DialogContentText>
						</DialogContent>
						<DialogActions>
							<Button onClick={() => setDialogOpen(false)} color="primary">
								No
							</Button>
							<Button
								onClick={() => {
									logout();
									setDialogOpen(false);
								}}
								color="primary"
								autoFocus
							>
								Logout
							</Button>
						</DialogActions>
					</Dialog>
				</Toolbar>
			</Box>
		</>
	);
};

export default Navigation;
