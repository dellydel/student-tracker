import { useNavigate } from "react-router-dom";
import { Link, Card, Typography, Box, Chip, Button } from "@mui/material";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
	margin: theme.spacing(0.3),
}));

const Course = ({ course }) => {
	const navigate = useNavigate();

	return (
		<Card
			sx={{ maxWidth: "450px", p: 3, mb: 3, mr: 3, backgroundColor: "#f5f5f5" }}
		>
			<Link
				onClick={() => {
					navigate("/course-details", {
						state: { course },
					});
				}}
				color="inherit"
				underline="none"
				sx={{ cursor: "pointer" }}
			>
				<Typography
					variant="h5"
					color="primary"
					sx={{ fontWeight: "bold", mb: 1 }}
				>
					{course.name}
				</Typography>
			</Link>
			<Box
				sx={{
					display: "flex",
					justifyContent: "start",
					flexWrap: "wrap",
					listStyle: "none",
					p: 0.5,
					m: 0,
					ml: -1,
				}}
				component="ul"
			>
				{course.technologies.slice(0, 3).map((tech) => {
					return (
						<ListItem key={tech}>
							<Chip
								sx={{ p: 0.5 }}
								label={tech}
								style={{ backgroundColor: "light-grey" }}
								size="small"
							/>
						</ListItem>
					);
				})}
				{course.technologies.length > 4 && (
					<Chip
						sx={{ p: 0.5 }}
						label={"..."}
						style={{ backgroundColor: "light-grey" }}
						size="small"
					/>
				)}
			</Box>
			<Typography component="p" sx={{ mb: 1 }}>
				{course.description}
			</Typography>
			<Button href="/course-details" variant="text" color="primary">
				MORE...
			</Button>
		</Card>
	);
};
export default Course;
