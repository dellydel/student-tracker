import React from "react";
import { Button, ListItem, ListItemText, Paper } from "@mui/material";

const CourseMaterial = ({ file }) => {
	const formatFileName = (file) => {
		if (file.name.length > 30) {
			file.name = file.name.substring(0, 30) + "...";
		}
		return file.name.endsWith(".mp4")
			? file.name.split(".").shift()
			: file.name;
	};

	return (
		<Paper
			sx={{
				backgroundColor: "#EEEEEE",
				mb: 2,
				p: 1,
			}}
		>
			<ListItem>
				<ListItemText primary={formatFileName(file)} />
				<Button
					variant="contained"
					color="primary"
					href={file.url}
					download
					target="_blank"
				>
					Download
				</Button>
			</ListItem>
		</Paper>
	);
};

export default CourseMaterial;
