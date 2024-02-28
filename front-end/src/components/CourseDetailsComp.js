import React from "react";
import { Typography, Grid, Button, Box } from "@mui/material";
import Link from "next/link";
import { encodeEmail } from "../utils/emailUtils";

const getCourseById = async (courseId) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/courses?courseId=${courseId}`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};
const getCourseRegistrationsByEmail = async (email) => {
	const res = await fetch(
		`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/registration?email=${email}`,
	);
	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}
	return res.json();
};

const CourseDetailsComp = async ({ courseId, email }) => {
	let registered = false;
	const courseDetails = await getCourseById(courseId);
	if (email !== null) {
		const registrations = await getCourseRegistrationsByEmail(
			encodeEmail(email),
		);
		registered = registrations.includes(courseDetails?.id);
	} else {
		registered = false;
	}

	const toCheckout = () => {
		return `/checkout?product_id=${courseDetails.id}&course_name=${courseDetails.name}&price=${courseDetails.price}&price_id=${courseDetails.priceLink}`;
	};

	const toCourseMaterials = () => {
		return "/course-materials";
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
			<>
				<Typography
					variant="h4"
					sx={{
						fontWeight: 600,
						my: 5,
					}}
				>
					{courseDetails.name}
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
								<b>Duration:</b> {courseDetails.duration}
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
								{courseDetails.description}
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
									{courseDetails.technologies.map((technology, index) => (
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
									{courseDetails.modules.map((outline, index) => (
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
								<b>Price: {courseDetails.price}</b>
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
									// onClick={email && registered ? toCourseMaterials() : toCheckout()}
								>
									<Link
										href={
											email && registered ? toCourseMaterials() : toCheckout()
										}
									>
										{email && registered
											? "View Course Material"
											: "Register for course"}
									</Link>
								</Button>
							</Grid>
						)}
						<Grid xs={12} item></Grid>
					</Grid>
				</form>
			</>
		</Box>
	);
};
export default CourseDetailsComp;
