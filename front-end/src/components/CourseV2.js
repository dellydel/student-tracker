import { Card, Typography, Box, Chip } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { styled } from "@mui/material/styles";

const ListItem = styled("li")(({ theme }) => ({
	margin: theme.spacing(0.3),
}));
const CourseV2 = ({ course, registered }) => {
	return (
		<Card
			sx={{ maxWidth: "450px", p: 0, mb: 3, mr: 3, backgroundColor: "#f5f5f5" }}
		>
			<CardMedia
				sx={{ height: 267, width: 486 }}
				image={course?.imageUrl}
				title="student"
			/>
			<Box
				sx={{
					display: "flex",
					justifyContent: "start",
					flexWrap: "wrap",
					listStyle: "none",
					px: 4,
					m: 3,
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
								weight="100"
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
			<Typography
				variant="h5"
				color="black"
				sx={{ fontWeight: 600, fontSize: 24, px: 4, mb: 3 }}
			>
				{course.name}
			</Typography>
			<Typography
				component="p"
				sx={{ fontWeight: 400, fontSize: 16, color: "#2B2D42", px: 4, mb: 2 }}
			>
				{course.description}
			</Typography>
			<hr style={{ color: "#2B2D42", width: "85%" }} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					flexWrap: "wrap",
					listStyle: "none",
					gap: 1,
					px: 0,
					m: 0,
				}}
			>
				<Typography
					component="p"
					sx={{
						fontWeight: 400,
						fontSize: 16,
						color: "#2B2D42",
						pl: 4,
						my: 1,
					}}
				>
					By
				</Typography>
				<Typography
					component="p"
					sx={{ fontWeight: 600, fontSize: 16, color: "#2B2D42", pl: 0, my: 1 }}
				>
					Nextbyte
				</Typography>
				<Typography
					component="p"
					sx={{
						fontWeight: 600,
						fontSize: 24,
						color: "#2B2D42",
						pl: "40%",
						my: 0,
					}}
				>
					{course.price}
				</Typography>
			</Box>
			<hr style={{ color: "#2B2D42", width: "85%" }} />
			<Box
				sx={{
					display: "flex",
					justifyContent: "flex-start",
					flexWrap: "wrap",
					listStyle: "none",
					gap: 7,
					px: 0,
					m: 0,
				}}
			>
				<Typography
					component="p"
					sx={{
						fontWeight: 600,
						fontSize: 16,
						color: "#2B2D42",
						pl: 4,
						my: 1,
					}}
				>
					<div>Students</div>
					<div style={{ fontWeight: 400 }}>2.4k</div>
				</Typography>
				<Typography
					component="p"
					sx={{ fontWeight: 600, fontSize: 16, color: "#2B2D42", pl: 0, my: 1 }}
				>
					<div>Duration</div>
					<div style={{ fontWeight: 400 }}>{course.duration}</div>
				</Typography>
				<Box
					style={{
						backgroundColor: "primary",
						borderRadius: "8px",
						marginTop: "12px",
						marginLeft: "19%",
						height: "40px",
						minWidth: "40px",
					}}
				>
					<img
						src="/images/right-arrow.png"
						alt="right-arrow"
						style={{
							height: "16px",
							width: "16px",
							marginTop: "10px",
							marginLeft: "10px",
						}}
					/>
				</Box>
			</Box>
		</Card>
	);
};
export default CourseV2;
