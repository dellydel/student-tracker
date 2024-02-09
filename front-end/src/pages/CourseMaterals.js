import React, { useState, useEffect } from "react";
import { List, Box, Typography } from "@mui/material";
import { getAllMaterials } from "../api/materialsAPI";
import CourseMaterial from "../components/CourseMaterial";

const pageLayout = {
	maxWidth: "1050px",
	mx: "auto",
	padding: "0 20px",
	minHeight: 1000,
	my: 5,
};

const CourseMaterals = () => {
	const [materials, setMaterials] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			const data = await getAllMaterials();
			data.map((document) => {
				document.name = document.name.split("/").pop();
				return document;
			});

			const videos = data.filter((file) => file.name.endsWith(".mp4"));
			const documents = data.filter((file) => !file.name.endsWith(".mp4"));
			setMaterials({ documents: documents, videos: videos });
		};

		fetchData();
	}, []);

	return (
		<Box
			sx={{ ...pageLayout, display: "flex", justifyContent: "space-between" }}
		>
			<Box sx={{ width: "50%" }}>
				<Box
					sx={{
						maxWidth: "525px",
						margin: "0 auto",
						padding: "0 20px",
						minHeight: 1000,
					}}
				>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 600,
							mt: 5,
							mb: 3,
						}}
					>
						Course Materials
					</Typography>
					<List sx={{ width: "100%" }}>
						{materials?.documents.map((document, index) => (
							<CourseMaterial key={index} file={document} />
						))}
					</List>
				</Box>
			</Box>
			<Box sx={{ width: "50%" }}>
				<Box
					sx={{
						maxWidth: "525px",
						margin: "0 auto",
						padding: "0 20px",
						minHeight: 1000,
					}}
				>
					<Typography
						variant="h6"
						sx={{
							fontWeight: 600,
							mt: 5,
							mb: 3,
						}}
					>
						Course Recordings
					</Typography>
					<List sx={{ width: "100%" }}>
						{materials?.videos.map((video, index) => (
							<CourseMaterial key={index} file={video} />
						))}
					</List>
				</Box>
			</Box>
		</Box>
	);
};

export default CourseMaterals;
