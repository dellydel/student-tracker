import React from "react";
import { AppBar, Toolbar, Link, Box } from "@mui/material";

const pages = [
	{ name: "HOME", link: "/" },
	{ name: "COURSES", link: "/courses" },
];

function Navigation() {
	return (
		<AppBar
			position="fixed"
			sx={{ background: "transparent", boxShadow: "none" }}
		>
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
					{pages.map((page) => (
						<Link
							key={page.name}
							href={page.link}
							sx={{
								m: 1,
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
				</Box>
			</Toolbar>
		</AppBar>
	);
}

export default Navigation;
