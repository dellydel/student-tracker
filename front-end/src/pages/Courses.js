import { useContext, useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Course from "../components/Course";
import { AuthContext } from "../context/AuthContext";
import { useCoursesData } from "../hooks/useCoursesData";

const pageLayout = {
	maxWidth: "1050px",
	margin: "0 auto",
	padding: "0 20px",
	minHeight: 1000,
	mt: 5,
};

const Courses = () => {
	const { data, isPending, isError, isSuccess, error } = useCoursesData();
	const { user } = useContext(AuthContext);

	const [courseIds, setCourseIds] = useState(null);

	useEffect(() => {
		const getRegisteredCourses = async (email) => {
			if (email === null) return [];
			const encodedEmail = encodeURIComponent(email);
			const registrations = await axios.get(
				`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/registration?email=${encodedEmail}`,
			);
			if (registrations && registrations.data.length > 0) {
				const courseIds = registrations.data.map(
					(registration) => registration.product_id,
				);
				setCourseIds(courseIds);
			}
		};
		getRegisteredCourses(
			user === null || user === undefined ? null : user.signInDetails.loginId,
		);
	}, [user, data]);

	return (
		<Box sx={pageLayout}>
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && (
				<Box
					component={"div"}
					sx={{
						display: "flex",
						flexWrap: "wrap",
						justifyContent: "flex-start",
					}}
				>
					{data.map((course) => (
						<Course
							registered={courseIds?.includes(course.id)}
							course={course}
							key={course.id}
						/>
					))}
				</Box>
			)}
		</Box>
	);
};

export default Courses;
