import { useNavigate, useLocation } from "react-router-dom";
import { Typography, Grid, Button, Box } from "@mui/material";

const CourseDetails = () => {
	const { state } = useLocation();
	const navigate = useNavigate();

	const handleFormTitle = () => {
		navigate("/register", { state });
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
					<Grid xs={6} item sx={{ mb: 5 }}>
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
							{state.course.description}
						</span>
					</Grid>
					<Grid xs={6} item></Grid>
					<Grid xs={6} item>
						<span
							style={{
								textAlign: "left",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							<b>Technology used:</b>
							<ul style={{ paddingLeft: 15 }}>
								{state.course.technologies.map((technology, index) => (
									<li key={index}>{technology}</li>
								))}
							</ul>
						</span>
					</Grid>

					<Grid xs={6} item style={{ display: "flex" }}>
						<span
							style={{
								textAlign: "left",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							<b>Course Modules:</b>
							<ul>
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
							<b>Price: {state.course.Price}</b>
						</span>
					</Grid>
					<Grid xs={12} item sx={{ mt: "10px", mb: "50px" }}>
						<Button
							style={{
								color: "white",
								backgroundColor: "green",
								textTransform: "capitalize",
								mt: "150px",
								mb: "50px",
							}}
							type="submit"
							variant="contained"
							onClick={handleFormTitle}
						>
							Register Now
						</Button>
					</Grid>
					<Grid xs={12} item></Grid>
				</Grid>
			</form>
		</Box>
	);
};
export default CourseDetails;
