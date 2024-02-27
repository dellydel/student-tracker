import { Card, Typography, Box, Chip } from "@mui/material";
import { styled } from "@mui/material/styles";
import Link from "next/link";

const ListItem = styled("li")(({ theme }) => ({
	margin: theme.spacing(0.3),
}));

const cardStyle = {
	maxWidth: "450px",
	p: 3,
	mb: 3,
	mr: 3,
	backgroundColor: "#f5f5f5",
	display: "flex",
	flexDirection: "column",
	height: "400px",
};
const Course = ({ course, registered }) => {
	return (
		<Card sx={cardStyle}>
			<Box sx={{ flex: "1 0 auto" }}>
				<Link
					href={`/course-details?id=${course.id}`}
					color="inherit"
					underline="none"
					style={{ cursor: "pointer" }}
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
			</Box>
			<Link href={`/course-details?id=${course.id}`}>More details...</Link>
		</Card>
	);
};
export default Course;
