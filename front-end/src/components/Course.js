import React from "react";
import { Card, Grid, Link } from "@mui/material";

function Course({ id, title, detail }) {
	return (
		<Card
			style={{
				maxWith: "600",
				marginTop: "70",
				marginLeft: "auto",
				marginRight: "auto",
			}}
		>
			<Grid container spacing={1} style={{ border: "1 solid black" }}>
				<Grid
					item
					xs={12}
					style={{ textAlign: "center", justifyItem: "center", margin: "2px" }}
				>
					<hr />
					<div key={id}>
						<Link href="/course-details" color="inherit" underline="none">
							{` ${title} ${detail.duration} ${detail.cost}
              `}
						</Link>
					</div>
				</Grid>
			</Grid>
		</Card>
	);
}

export default Course;
