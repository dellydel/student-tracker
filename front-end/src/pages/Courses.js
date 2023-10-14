import React from "react";
import { Box, Typography } from "@mui/material";
import Course from "../components/Course";
import courseList from "../test-data/courseList";

const Courses = () => {
	return (
		<Box sx={{ maxWidth: "1050px", margin: "0 auto", padding: "0 20px" }}>
			<Typography
				variant="h4"
				sx={{
					fontWeight: 600,
					my: 3,
				}}
			>
				Course List
			</Typography>
			<Box
				component={"div"}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "flex-start",
				}}
			>
				{courseList.map((course) => (
					<Course course={course} key={course.id} />
				))}
			</Box>
		</Box>
	);
};

export default Courses;
