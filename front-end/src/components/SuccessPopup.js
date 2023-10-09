import * as React from "react";
import { DialogTitle } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import Snackbar from "@mui/material/Snackbar";
import Stack from "@mui/material/Stack";
import { green } from "@mui/material/colors";

const Alert = React.forwardRef(function Alert(props, ref) {
	return <MuiAlert elevation={50} ref={ref} variant="filled" {...props} />;
});
export default function SuccessPopup() {
	const [open, setOpen] = React.useState(false);
	const [isYes, setIsYes] = React.useState(false);
	const handleYesClick = () => {
		setIsYes(true);
		setOpen(false);
	};
	const handleClickOpen = () => {
		setOpen(true);
	};
	const handleClose = () => {
		setOpen(false);
		setIsYes(false);
	};
	return (
		<Stack spacing={2} sx={{ width: "100%" }}>
			<Button
				sx={{
					backgroundColor: green[700],
					"&:hover": {
						backgroundColor: green[700],
					},
					color: "white",
					textDecoration: "none",
				}}
				variant="outlined"
				onClick={handleClickOpen}
			>
				Submit
			</Button>
			<Dialog
				open={open}
				onClose={handleClose}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle>Comfirm</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						Are you sure you want to submit ?
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose}>No</Button>
					<Button onClick={handleYesClick} autoFocus>
						Yes
					</Button>
				</DialogActions>
			</Dialog>
			<Snackbar
				anchorOrigin={{
					vertical: "center",
					horizontal: "center",
				}}
				open={isYes}
				autoHideDuration={3000}
				onClose={handleClose}
			>
				<Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
					Your registration has been successfully submitted !
				</Alert>
			</Snackbar>
		</Stack>
	);
}
