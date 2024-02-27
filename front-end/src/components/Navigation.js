"use client";

import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
	Toolbar,
	Box,
	Modal,
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
import Link from "next/link";
import { useRouter } from "next/navigation";
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
	width: 400,
};

const navLinkStyle = {
	margin: "16px",
	padding: "8px",
	color: "white",
	textDecoration: "none",
	fontWeight: "bold",
	fontSize: "1.2rem",
	cursor: "pointer",
};

const Navigation = () => {
	const router = useRouter();
	const { isLoggedIn, logout, showLogin, user } = useContext(AuthContext);
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
							href="/"
							style={{
								margin: "8px 0",
								padding: "8px 0",
								color: "white",
								textDecoration: "none",
							}}
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
						<IconButton
							aria-label="hamburger"
							color="inherit"
							onClick={handleMenu}
						>
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
							<Link key={page.name} href={`${page.link}`} style={navLinkStyle}>
								{page.name}
							</Link>
						))}
						{isLoggedIn ? (
							<>
								<Link href="/user" style={navLinkStyle}>
									MY COURSES
								</Link>
								<Box sx={loginNav}>
									|
									<a
										onClick={() => setDialogOpen(true)}
										underline="none"
										style={navLinkStyle}
									>
										{user ? user : "LOGOUT"}
									</a>
								</Box>
							</>
						) : (
							<Box sx={loginNav}>
								|
								<a
									underline="none"
									style={navLinkStyle}
									onClick={() => setOpen(true)}
								>
									<Box component={"span"}>LOGIN /REGISTER</Box>
								</a>
							</Box>
						)}
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
							<Button underline="none" href="/courses">
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
									router.push("/");
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
