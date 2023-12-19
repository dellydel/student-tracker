import React, { useState, useEffect } from "react";
import {
	Button,
	List,
	ListItem,
	ListItemText,
	Box,
	Typography,
	Paper,
} from "@mui/material";

const CourseMaterals = () => {
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/materials`,
				);
				const data = await response.json();

				data.map((document) => {
					document.name = document.name.split("/").pop();
					return document;
				});

				setDocuments(data);
			} catch (error) {
				console.error("Error fetching S3 contents:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<Box
			sx={{
				maxWidth: "1050px",
				margin: "0 auto",
				padding: "0 20px",
				minHeight: 1000,
			}}
		>
			<Typography
				variant="h4"
				sx={{
					fontWeight: 600,
					my: 5,
				}}
			>
				Course Materials
			</Typography>

			<List sx={{ width: "50%" }}>
				{documents.map((document, index) => (
					<Paper
						key={index}
						sx={{
							backgroundColor: "#EEEEEE",
							mb: 2,
							p: 1,
						}}
					>
						<ListItem>
							<ListItemText primary={document.name} />
							<Button
								variant="contained"
								color="primary"
								href={document.url}
								download
								target="_blank"
							>
								Download
							</Button>
						</ListItem>
					</Paper>
				))}
			</List>
		</Box>
	);
};

export default CourseMaterals;
