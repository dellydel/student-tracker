"use client";

import React, { useContext } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useRouter } from "next/navigation";
import { AuthContext } from "../../context/AuthContext";
import { useCourseByIdData } from "../../hooks/useCoursesData";

const CourseDetails = () => {
	const router = useRouter();
	const { courseId } = router.query;
	//const { isLoggedIn } = useContext(AuthContext);
	const { data, isPending, isError, isSuccess, error } =
		useCourseByIdData(courseId);

	const courseDetails = getCourseB;
	const toCheckout = () => {
		router.push("/checkout");
		// router.push("/checkout", {
		// 	state: {
		// 		product_id: data.course.id,
		// 		course_name: data.course.name,
		// 		price: data.course.price,
		// 		price_id: data.course.priceLink,
		// 	},
		// });
	};

	const toCourseMaterials = () => {
		router.push("/course-materials");
	};

	return (
		<Box
			sx={{
				maxWidth: "1050px",
				margin: "0 auto",
				padding: "0 20px",
				minHeight: 1000,
			}}
		>
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && (
				<>
					<Typography
						variant="h4"
						sx={{
							fontWeight: 600,
							my: 5,
						}}
					>
						{data.course.name}
					</Typography>
					<form>
						<Grid container spacing={2}>
							<Grid xs={12} item>
								<span
									style={{
										textAlign: "left",
										padding: "0px",
										marginTop: "0px",
										marginBottom: "0px",
										color: "grey",
									}}
								>
									<b>Duration:</b> {data.course.duration}
								</span>
							</Grid>
							<Grid xs={12} item sx={{ mb: 5 }}>
								<span
									style={{
										textAlign: "left",
										padding: "0px",
										marginTop: "0px",
										marginBottom: "0px",
										color: "grey",
									}}
								>
									<b>Description:</b>
									<br />
									{data.course.description}
								</span>
							</Grid>
							<Grid xs={12} md={6} item>
								<span
									style={{
										textAlign: "left",
										marginBottom: "0px",
										color: "grey",
									}}
								>
									<b>Technology used:</b>
									<ul
										style={{
											listStylePosition: "inside",
											paddingInlineStart: 0,
										}}
									>
										{data.course.technologies.map((technology, index) => (
											<li key={index}>{technology}</li>
										))}
									</ul>
								</span>
							</Grid>

							<Grid xs={12} md={6} item style={{ display: "flex" }}>
								<span
									style={{
										textAlign: "left",
										marginBottom: "0px",
										color: "grey",
									}}
								>
									<b>Course Modules:</b>
									<ul
										style={{
											listStylePosition: "inside",
											paddingInlineStart: 0,
										}}
									>
										{data.course.modules.map((outline, index) => (
											<li key={index}>{outline}</li>
										))}
									</ul>
								</span>
							</Grid>
							<Grid xs={12} item style={{ display: "flex" }}>
								<span
									style={{
										textAlign: "left",
										marginBottom: "0px",
										color: "grey",
									}}
								>
									<b>Price: {data.course.price}</b>
								</span>
							</Grid>
							<Grid xs={12} item sx={{ mt: "10px", mb: "50px" }}>
								<Button
									style={{
										color: "white",
										backgroundColor: "green",
										mt: "150px",
									}}
									variant="contained"
									onClick={
										isLoggedIn && data.registered
											? toCourseMaterials
											: toCheckout
									}
								>
									{isLoggedIn && data.registered
										? "View Course Material"
										: "Register for course"}
								</Button>
							</Grid>
							<Grid xs={12} item></Grid>
						</Grid>
					</form>
				</>
			)}
		</Box>
	);
};
export default CourseDetails;
