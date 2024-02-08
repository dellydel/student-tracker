import { useContext, useEffect } from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import { getCourseRegistrations } from "../api/registrationAPI";
import CourseV2 from "../components/CourseV2";
import { AuthContext } from "../context/AuthContext";
import { useCoursesData } from "../hooks/useCoursesData";
import { encodeEmail } from "../utils/emailUtils";

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
		const fetchRegistrations = async () => {
			if (user === null) {
				setCourseIds([]);
				return;
			}
			const registrations = await getCourseRegistrations(encodeEmail(user));

			if (registrations && registrations.length > 0) {
				const courseIds = registrations.map(
					(registration) => registration.product_id,
				);
				setCourseIds(courseIds);
			}
		};
		fetchRegistrations();
	}, [user]);

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
						<CourseV2
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
