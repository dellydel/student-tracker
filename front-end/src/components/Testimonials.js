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
						<div style={{ flex: 1 }}>
							<span>
								<Avatar src={testimonial.avatarUrl} atl="student"></Avatar>
								<br />
								<span
									style={{ fontStyle: "italic" }}
								>{`"${testimonial.testimonial}"`}</span>
								<p
									style={{
										textAlign: "right",
										color: "black",
										fontWeight: 900,
										marginRight: "70px",
									}}
								>
									{testimonial.FirstName}&nbsp;{testimonial.LastInitial}.
								</p>
							</span>
						</div>
					);
				})}
			</div>
		</>
	);
};
export default Testimonials;
