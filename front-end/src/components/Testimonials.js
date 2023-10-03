import React from "react";
import Avatar from "@mui/material/Avatar";
import testimonialData from "../test-data/testimonials";

const Testimonials = () => {
	return (
		<>
			<h3>Testimonials</h3>
			<div
				style={{
					display: "flex",
					flexDirection: "row",
					justifyItems: "center",
					AlignItems: "center",
					marginBottom: "70px",
					boxSizing: "borderBox",
					gap: "30px",
				}}
			>
				{testimonialData.map((testimonial) => {
					return (
						<div key={testimonial.id} style={{ flex: 1 }}>
							<span>
								<span
									style={{
										display: "flex",
									}}
								>
									<Avatar src={testimonial.avatarUrl} atl="student"></Avatar>
									<span
										style={{
											margin: "10px",
										}}
									>
										{testimonial.FirstName}&nbsp;{testimonial.LastInitial}.
									</span>
								</span>
								<p
									style={{ fontStyle: "italic" }}
								>{`"${testimonial.testimonial}"`}</p>
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Testimonials;
