import React, { useState, useEffect } from "react";
import { Button, List, ListItem, ListItemText } from "@mui/material";

const CourseMaterals = () => {
	const [documents, setDocuments] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch("/.netlify/functions/getS3Contents");
				const data = await response.json();
				setDocuments(data);
			} catch (error) {
				console.error("Error fetching S3 contents:", error);
			}
		};

		fetchData();
	}, []);

	return (
		<div>
			<h1>Course Materials</h1>
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
		</div>
	);
};

export default CourseMaterals;
