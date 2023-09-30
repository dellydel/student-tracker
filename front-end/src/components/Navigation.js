import React from "react";
import { AppBar, Toolbar, Link, Box } from "@mui/material";

const pages = [
	{ name: "HOME", link: "/" },
	{ name: "COURSES", link: "/courses" },
];

function Navigation() {
	return (
		<div>
			<Box>
				<AppBar position="static">
					<Toolbar>
						<Box
							sx={{
								pl: 5,
								flexGrow: 1,
								display: "flex",
								justifyContent: "flex-start",
							}}
						>
							<Link
								href={"/"}
								sx={{ m: 1, p: 1, color: "white", textDecoration: "none" }}
							>
								NextByte [TEXT LOGO]
							</Link>
						</Box>
						<Box
							sx={{
								flexGrow: 1,
								display: "flex",
								justifyContent: "flex-end",
							}}
						>
							{pages.map((page) => (
								<Link
									key={page.name}
									href={page.link}
									sx={{ m: 1, p: 1, color: "white", textDecoration: "none" }}
								>
									{page.name}
								</Link>
							))}
						</Box>
					</Toolbar>
				</AppBar>
			</Box>
		</div>
	);
}

export default Navigation;
