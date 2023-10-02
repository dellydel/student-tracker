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
					justifyContent: "space-between",
					gap: "50px",
					marginBottom: "20px",
				}}
			>
				{testimonialData.map((testimonial) => {
					return (
						<div>
							<span>
								<Avatar src={testimonial.avatarUrl} atl="student"></Avatar>
								<br />
								<span
									style={{ fontStyle: "italic" }}
								>{`"${testimonial.testimonial}"`}</span>
								<p
									style={{
										textAlign: "right",
										marginRight: 50,
										color: "black",
										fontWeight: 900,
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
