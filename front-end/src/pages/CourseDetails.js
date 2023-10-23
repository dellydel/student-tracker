import { useNavigate } from "react-router-dom";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	Button,
	Box,
} from "@mui/material";

const CourseDetails = ({
	courseName,
	duration,
	technology,
	description,
	price,
	outline,
}) => {
	const navigate = useNavigate();
	const handleFormTitle = () => {
		navigate("/register");
	};
	return (
		<Box sx={{ maxWidth: "1050px", margin: "0 auto", padding: "0 20px" }}>
			<Typography gutterBottom variant="h6" sx={{ mt: "50px", mb: "50px" }}>
				Course Detail
			</Typography>
			<p></p>
			<form>
				<Grid container spacing={2}>
					<Grid xs={6} item style={{ display: "flex" }}>
						<span
							style={{
								textAlign: "left",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							Course name:{courseName}
						</span>
					</Grid>
					<Grid xs={6} item>
						<span
							style={{
								textAlign: "left",
								padding: "0px",
								marginTop: "0px",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							Duration:{duration}
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
							Technology used:{technology}
						</span>
					</Grid>
					<Grid xs={6} item>
						<span
							style={{
								textAlign: "left",
								padding: "0px",
								marginTop: "0px",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							Description: {description}
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
							Course outline:{outline}
						</span>
						<ul>
							<li></li>
						</ul>
					</Grid>
					<Grid xs={12} item style={{ display: "flex" }}>
						<span
							style={{
								textAlign: "left",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							Price:{price}
						</span>
					</Grid>
					<Grid xs={12} item sx={{ mt: "50px", mb: "50px" }}>
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
