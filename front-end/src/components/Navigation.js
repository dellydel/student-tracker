import React, { useState, RouterLink } from "react";
import { AppBar, Toolbar, Link, Box, Stack } from "@mui/material";
import Avatar from "@mui/material/Avatar";

const pages = [
	{ name: "HOME", link: "/" },
	{ name: "COURSES", link: "/courses" },
];

function Navigation({ isLogin = true }) {
	return (
		<div>
			<Box sx={{ flexGrow: 1 }}>
				<AppBar position="fixed" color="transparent" elevation={0}>
					<Toolbar>
						<Stack
							direction="row"
							spacing={8}
							sx={{
								flexGrow: 1,
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							<Box>
								{pages.map((page) => (
									<Link
										key={page}
										href={page.link}
										sx={{ m: 1, p: 1, color: "white", textDecoration: "none" }}
									>
										{page.name}
									</Link>
								))}
							</Box>
							<Box>
								{isLogin ? (
									<Stack direction="row">
										<Avatar sx={{ width: 25, height: 25, mb: 2, mr: 1 }}>
											ID
										</Avatar>
										<Box sx={{ color: "white" }}>USER NAME</Box>
									</Stack>
								) : (
									<Link
										href={"/Login"}
										sx={{ m: 1, p: 1, color: "white", textDecoration: "none" }}
									>
										LOGIN
									</Link>
								)}
							</Box>
						</Stack>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}

export default Navigation;
