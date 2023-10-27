import React, { useEffect } from "react";
import { Box, Typography } from "@mui/material";
import axios from "axios";
import Course from "../components/Course";
import courseList from "../test-data/courseList";

const Courses = () => {
	useEffect(() => {
		axios
			.get(
				"https://jhp99bx2t6.execute-api.us-east-1.amazonaws.com/development/Courses",
			)
			.then((res) => {
				console.log(res.data);
			});
	});

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
