import { Box } from "@mui/material";
import Course from "../../components/Course";

const pageLayout = {
	maxWidth: "1050px",
	margin: "0 auto",
	padding: "0 20px",
	minHeight: 1000,
	mt: 5,
};

const getCourses = async () => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

const Courses = async () => {
	const data = await getCourses();

	return (
		<Box sx={pageLayout}>
			<Box
				component={"div"}
				sx={{
					display: "flex",
					flexWrap: "wrap",
					justifyContent: "flex-start",
				}}
			>
				{data.map((course) => (
					<Course course={course} key={course.id} />
				))}
			</Box>
		</Box>
	);
};

export default Courses;
