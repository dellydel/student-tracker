"use client";

import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import { getCourseRegistrationsByEmail } from "../api/registrationAPI";
import { AuthContext } from "../context/AuthContext";
import { useCourseByIdData } from "../hooks/useCoursesData";
import { encodeEmail } from "../utils/emailUtils";

const CourseDetails = () => {
	const router = useRouter();
	const params = useSearchParams();
	const id = params.get("id");
	const { user } = useContext(AuthContext);
	const [registered, setRegistered] = useState(null);

	if (!id || id === "undefined") {
		useEffect(() => {
			router.push("/error?type=not_found");
		}, []);
		return null;
	}

	const {
		data: course,
		isPending,
		isError,
		isSuccess,
		error,
	} = useCourseByIdData(id);

	useEffect(() => {
		const fetchRegistrations = async () => {
			if (user === null) {
				setRegistered(false);
				return;
			}
			const registrations = await getCourseRegistrationsByEmail(
				encodeEmail(user),
			);

			if (registrations && registrations.length > 0) {
				setRegistered(registrations.includes(course?.data.id));
			} else {
				setRegistered(false);
			}
		};
		fetchRegistrations();
	}, [user]);

	const toCheckout = () => {
		router.push(`/checkout?product_id=${course?.data.id}
		&course_name=${course?.data.name}
		&price=${course?.data.price}
		&price_id=${course?.data.priceLink}`);
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
			{/* {JSON.stringify(course)} */}
			{isPending && <span>Loading...</span>}
			{isError && <span>{error.message}</span>}
			{isSuccess && course.data && (
				<>
					<Typography
						variant="h4"
						sx={{
							fontWeight: 600,
							my: 5,
						}}
					>
						{course.data.name}
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
									<b>Duration:</b> {course.data.duration}
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
									{course.data.description}
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
										{course.data.technologies.map((technology, index) => (
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
										{course.data.modules.map((outline, index) => (
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
									<b>Price: {course.data.price}</b>
								</span>
							</Grid>
							{registered !== null && (
								<Grid xs={12} item sx={{ mt: "10px", mb: "50px" }}>
									<Button
										style={{
											color: "white",
											backgroundColor: "green",
											mt: "150px",
										}}
										variant="contained"
										onClick={
											user && registered ? toCourseMaterials : toCheckout
										}
									>
										{user && registered
											? "View Course Material"
											: "Register for course"}
									</Button>
								</Grid>
							)}
							<Grid xs={12} item></Grid>
						</Grid>
					</form>
				</>
			)}
		</Box>
	);
};
export default CourseDetails;
