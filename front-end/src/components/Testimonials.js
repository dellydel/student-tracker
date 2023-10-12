import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import testimonialData from "../test-data/testimonials";

const Testimonials = () => {
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "row",
				justifyItems: "center",
				justifyContent: "space-between",
				my: 2,
			}}
		>
			{testimonialData.map((testimonial) => {
				return (
					<Box
						key={testimonial.id}
						sx={{
							width: "325px",
							alignItems: "center",
							mb: 4,
						}}
					>
						<Box
							style={{
								display: "flex",
								alignItems: "center",
							}}
						>
							<Avatar
								sx={{ height: "75px", width: "75px", mr: 2, mb: 2 }}
								src={testimonial.avatarUrl}
								alt="student avatar"
							></Avatar>
							<Typography variant="span" sx={{ mb: 2 }}>
								{testimonial.FirstName} {testimonial.LastInitial}.
							</Typography>
						</Box>
						<Typography variant="p" sx={{ fontStyle: "italic" }}>
							{testimonial.testimonial}
						</Typography>
					</Box>
				);
			})}
		</Box>
	);
};
export default Testimonials;
