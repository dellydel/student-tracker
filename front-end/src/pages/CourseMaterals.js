import React, { useState, useEffect } from "react";
import {
	Button,
	List,
	ListItem,
	ListItemText,
	Box,
	Typography,
} from "@mui/material";

const CourseMaterals = () => {
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(
					"https://jhp99bx2t6.execute-api.us-east-1.amazonaws.com/development/materials",
				);
				const data = await response.json();
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
			<List>
				{documents.map((document, index) => (
					<ListItem key={index}>
						<ListItemText primary={document.name} />
						<Button
							variant="contained"
							color="primary"
							href={document.url}
							download
						>
							Download
						</Button>
					</ListItem>
				))}
			</List>
		</Box>
	);
};

export default CourseMaterals;
