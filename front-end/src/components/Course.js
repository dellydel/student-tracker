import React from "react";
import { Link, Card, Typography } from "@mui/material";

const Course = ({ course }) => {
	return (
		<Card sx={{ maxWidth: 425, p: 3, m: 3, backgroundColor: "#f5f5f5" }}>
			<Link href="/course-details" color="inherit" underline="none">
				<Typography
					variant="h5"
					component="div"
					sx={{ fontWeight: "bold", mb: 1, color: "#1976d2" }}
				>
					{course.name}
				</Typography>
				<Typography component="p" sx={{ mb: 1 }}>
					{course.description}
				</Typography>
				<Typography component="p" sx={{ fontWeight: "bold" }}>
					{course.Price}
				</Typography>
			</Link>
		</Card>
	);
};

export default Course;
