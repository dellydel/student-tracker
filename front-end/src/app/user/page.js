"use client";

import { useContext, useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import axios from "axios";
import Course from "../../components/Course";
import { AuthContext } from "../../context/AuthContext";

const pageLayout = {
	maxWidth: "1050px",
	margin: "0 auto",
	padding: "0 20px",
	minHeight: 1000,
	mt: 5,
};

const UserInformationScreen = () => {
	const { user } = useContext(AuthContext);
	const [courses, setCourses] = useState(null);
	const [courseIds, setCourseIds] = useState(null);

	useEffect(() => {
		const getRegisteredCourses = async (email) => {
			if (email === null) return [];
			const encodedEmail = encodeURIComponent(email);
			const registrations = await axios.get(
				`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/registration?email=${encodedEmail}`,
			);
			if (registrations && registrations.data.length > 0) {
				const courseIds = registrations.data.map(
					(registration) => registration.product_id,
				);
				const courses = await axios.post(
					`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
					{
						courseIds,
					},
				);
				setCourseIds(courseIds);
				setCourses(courses);
			}
		};
		getRegisteredCourses(user);
	}, [user]);

	return (
		<Box sx={pageLayout}>
			{courses && courses.data.length === 0 && (
				<h3>You have not registered for any upcoming courses.</h3>
			)}
			<Box
				component={"div"}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "flex-start",
				}}
			>
				{courses &&
					courses.data.map((course) => (
						<Course
							registered={courseIds?.includes(course.id)}
							course={course}
							key={course.id}
						/>
					))}
			</Box>
		</Box>
	);
};

export default UserInformationScreen;