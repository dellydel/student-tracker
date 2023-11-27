import { Box } from "@mui/material";
import Course from "../components/Course";
import { useCoursesByIdData } from "../hooks/useCoursesData";
import { useRegistrationData } from "../hooks/useRegistrationData";

const pageLayout = {
	maxWidth: "1050px",
	margin: "0 auto",
	padding: "0 20px",
	minHeight: 1000,
	mt: 5,
};

const UserInformationScreen = () => {
	const { data: registrations } = useRegistrationData();

	const {
		data: courses,
		isPending,
		isError,
		isSuccess,
		error,
	} = useCoursesByIdData(["prod_Odj0L1XDyvrQ3g"]);
	//} = useCoursesByIdData(registrations);

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
					{courses.map((course) => (
						<Course course={course} key={course.id} />
					))}
				</Box>
			)}
		</Box>
	);
};

export default UserInformationScreen;
