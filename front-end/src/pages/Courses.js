import React from "react";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import courseList from "../test-data/courseList";

const Courses = () => {
	return (
		<div>
			<Typography
				variant="h6"
				gutterBottom
				sx={{
					fontSize: 30,
					color: "black",
					fontWeight: 600,
				}}
			>
				Course List
			</Typography>
			<List>
				{courseList.map((course) => (
					<Course course={course} key={course.name} />
				))}
			</List>
		</div>
	);
};

function Course({ course }) {
	return (
		<>
			<Link href="/course-details" color="inherit" underline="none">
				<b>
					<ListItem alignItems="flex-start">{course.name} </ListItem>
				</b>
				<ListItem alignItems="flex-start">{course.description} </ListItem>
				<ListItem alignItems="flex-start">{course.Price}</ListItem>
				<p>
					<Divider />
				</p>
			</Link>
		</>
	);
}
export default Courses;
