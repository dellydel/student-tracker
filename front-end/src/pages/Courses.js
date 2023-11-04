import React, { useEffect } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Course from "../components/Course";

const Courses = () => {
	const [courses, setCourses] = React.useState([]);

	useEffect(() => {
		axios
			.get(
				"https://jhp99bx2t6.execute-api.us-east-1.amazonaws.com/development/courses",
			)
			.then((res) => {
				setCourses(res.data.Items);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	return (
		<Box
			sx={{
				maxWidth: "1050px",
				margin: "0 auto",
				padding: "0 20px",
				minHeight: 1000,
				mt: 5,
			}}
		>
			<Box
				component={"div"}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "flex-start",
				}}
			>
				{courses.map((course) => (
					<Course course={course} key={course.id} />
				))}
			</Box>
		</Box>
	);
};

export default Courses;
