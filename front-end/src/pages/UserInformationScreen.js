import { Box } from "@mui/material";

//import Course from "../components/Course";
//import { useCoursesData } from "../hooks/useCoursesData";

const pageLayout = {
	maxWidth: "1050px",
	margin: "0 auto",
	padding: "0 20px",
	minHeight: 1000,
	mt: 5,
};

const UserInformationScreen = () => {
	//const { data, isPending, isError, isSuccess, error } = useCoursesData();

	return (
		<Box sx={pageLayout}>
			<Box component={"h3"} sx={{ m: 5 }}>
				No upcoming registrations found
			</Box>
		</Box>
		// <Box sx={pageLayout}>
		// 	{isPending && <span>Loading...</span>}
		// 	{isError && <span>{error.message}</span>}
		// 	{isSuccess && (
		// 		<Box
		// 			component={"div"}
		// 			sx={{
		// 				display: "flex",
		// 				flexWrap: "wrap",
		// 				justifyContent: "flex-start",
		// 			}}
		// 		>
		// 			{data.map((course) => (
		// 				<Course course={course} key={course.id} />
		// 			))}
		// 		</Box>
		// 	)}
		// </Box>
	);
};

export default UserInformationScreen;
