import React from "react";
import { Typography, Box } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import testimonials from "../data/testimonialsContent";

const Testimonials = () => {
	return (
		<Box
			sx={{
				display: "flex",
				justifyItems: "center",
				justifyContent: "center",
				my: 2,
				flexDirection: { xs: "column", md: "row" },
			}}
		>
			{testimonials.map((testimonial) => {
				return (
					<Box
						key={testimonial.id}
						sx={{
							m: { xs: "auto", md: 2 },
							pb: 8,
							width: { xs: "100%", lg: "30%" },
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
								alt="testimonial avatar"
							></Avatar>
							<Typography variant="span" sx={{ mb: 2 }}>
								{testimonial.FirstName} {testimonial.LastInitial}.
							</Typography>
						</Box>
						<Typography variant="p" sx={{ fontStyle: "italic" }}>
							"{testimonial.testimonial}"
						</Typography>
					</Box>
				);
			})}
		</Box>
	);
};
export default Testimonials;
