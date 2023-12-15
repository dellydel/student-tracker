import React, { useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Typography, Grid, Button, Box } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const CourseDetails = () => {
	const { state } = useLocation();
	const navigate = useNavigate();
	const { isLoggedIn } = useContext(AuthContext);

	const toCheckout = () => {
		navigate("/checkout", {
			state: {
				product_id: state.course.id,
				course_name: state.course.name,
				price: state.course.price,
				price_id: state.course.priceLink,
			},
		});
	};

	const toCourseMaterials = () => {
		navigate("/course-materials");
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
			<Typography
				variant="h4"
				sx={{
					fontWeight: 600,
					my: 5,
				}}
			>
				{state.course.name}
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
							<b>Duration:</b> {state.course.duration}
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
							{state.course.description}
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
								style={{ listStylePosition: "inside", paddingInlineStart: 0 }}
							>
								{state.course.technologies.map((technology, index) => (
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
								style={{ listStylePosition: "inside", paddingInlineStart: 0 }}
							>
								{state.course.modules.map((outline, index) => (
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
							<b>Price: {state.course.price}</b>
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
								isLoggedIn && state.registered ? toCourseMaterials : toCheckout
							}
						>
							{isLoggedIn && state.registered
								? "View Course Material"
								: "Register for course"}
						</Button>
					</Grid>
					<Grid xs={12} item></Grid>
				</Grid>
			</form>
		</Box>
	);
};
export default CourseDetails;
