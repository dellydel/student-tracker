import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import {
	Typography,
	Grid,
	TextField,
	Button,
	InputAdornment,
	Tooltip,
	Avatar,
	Box,
	Alert,
	Snackbar,
} from "@mui/material";

//import { Auth } from "aws-amplify";

const initialSnackbarState = {
	message: "",
	type: "success",
	isOpen: false,
};

const RegisterCourse = () => {
	const navigate = useNavigate();
	const [setFirstName] = useState("");
	const [setLastName] = useState("");
	const [setPhoneNumber] = useState("");
	const [setEmail] = useState("");
	const [setStreet] = useState("");
	const [setCity] = useState("");
	const [setState] = useState("");
	const [setZip] = useState("");
	const [setCountry] = useState("");
	const [setDateOfBirth] = useState("");
	const [setPassword] = useState("");
	const [setConfirmPassword] = useState("");
	const [feedBackText, setFeedBackText] = useState("");
	const [isLoading] = useState(false);
	const { state } = useLocation();
	const [snackbarState, setSnackbarState] = useState(initialSnackbarState);

	const resetForm = () => {
		setFeedBackText("");
	};

	const handleClose = () => {
		setSnackbarState(initialSnackbarState);
	};

	const registerStudent = (event) => {
		// Auth.signUp({
		// 	username: email,
		// 	password,
		// 	attributes: {
		// 		email,
		// 		name: `${fname} ${lname}`,
		// 		phone_number: phoneNumber,
		// 	},
		// })
		// 	.then(() => {
		setSnackbarState({
			message: "Your registration has been successfully submitted.",
			type: "success",
			isOpen: true,
		});
		navigate("/checkout");
		// })
		// .catch((err) => {
		// 	setSnackbarState({
		// 		message:
		// 			"An Error has occurred. Your registration was not submitted.",
		// 		type: "error",
		// 		isOpen: true,
		// 	});
		// });
	};

	return (
		<>
			<Snackbar
				open={snackbarState.isOpen}
				autoHideDuration={3000}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Alert
					onClose={handleClose}
					severity={snackbarState.type}
					sx={{ width: "100%" }}
				>
					{snackbarState.message}
				</Alert>
			</Snackbar>
			<Box
				sx={{
					maxWidth: "1050px",
					margin: "0 auto",
					padding: "0 20px",
					bottomPadding: "50px",
					minHeight: 1000,
				}}
			>
				<Typography
					gutterBottom
					variant="h5"
					style={{ marginTop: "30px", marginBottom: "20px" }}
				>
					{state.course.name}
				</Typography>
				<Typography
					gutterBottom
					color="textSecondary"
					variant="body2"
					component="p"
				>
					All fields are compulsory, ensure all details are correct.
				</Typography>
				<form onSubmit={registerStudent}>
					<Grid container spacing={2}>
						<Grid xs={12} sm={6} item>
							<TextField
								label="First Name"
								name="firstName"
								placeholder="Enter first name"
								fullWidth
								required
								onChange={(event) => setFirstName(event.target.value)}
							/>
						</Grid>
						<Grid xs={12} sm={6} item>
							<TextField
								label="Last Name"
								name="lastName"
								placeholder="Enter last name"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setLastName(event.target.value)}
							/>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="number"
								name="phoneNumber"
								label="Phone"
								placeholder="Enter phone number"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setPhoneNumber(event.target.value)}
							/>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="email"
								name="email"
								label="Email"
								placeholder="Enter email"
								variant="outlined"
								onFocus={() => setFeedBackText("")}
								fullWidth
								required
								onChange={(event) => setEmail(event.target.value)}
							/>
						</Grid>
						<Grid xs={12} item>
							<TextField
								label="Street"
								name="street"
								placeholder="Enter street"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setStreet(event.target.value)}
							/>
						</Grid>
						<Grid xs={12} sm={4} item>
							<TextField
								label="City"
								name="city"
								placeholder="Enter city"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setCity(event.target.value)}
							/>
						</Grid>
						<Grid xs={12} sm={4} item>
							<TextField
								label="State / Province"
								name="state"
								placeholder="Enter state / province of residence"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setState(event.target.value)}
							/>
						</Grid>
						<Grid type="number" xs={12} sm={4} item>
							<TextField
								label="Zip"
								name="zip"
								placeholder="Enter zip"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setZip(event.target.value)}
							/>
						</Grid>
						<Grid xs={6} item>
							<TextField
								label="Country"
								name="Country"
								placeholder="Enter Country"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setCountry(event.target.value)}
							/>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="Date"
								name="dateOfBirth"
								label="Date of birth"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setDateOfBirth(event.target.value)}
								InputLabelProps={{
									shrink: true,
								}}
							/>
						</Grid>
						<Grid xs={6} item>
							<TextField
								label="Password"
								type="password"
								name="Password"
								placeholder="Enter your password"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setPassword(event.target.value)}
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<Tooltip
												title="Password should be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character."
												placement="right"
												arrow
											>
												<Avatar>
													<HelpOutlineIcon />
												</Avatar>
											</Tooltip>
										</InputAdornment>
									),
								}}
							/>
						</Grid>
						<Grid xs={6} item>
							<TextField
								label="Confirm Password"
								name="Confirm Password"
								type="password"
								placeholder="Enter your password"
								variant="outlined"
								fullWidth
								required
								onChange={(event) => setConfirmPassword(event.target.value)}
							/>
						</Grid>
						<Grid xs={12} item>
							<div>{isLoading ? "Loading..." : feedBackText}</div>
						</Grid>
						<Grid item>
							<Button
								type="submit"
								variant="contained"
								style={{ backgroundColor: "green" }}
							>
								Submit
							</Button>
						</Grid>
						<Grid item>
							<Button
								type="reset"
								onClick={resetForm}
								variant="contained"
								style={{ backgroundColor: "green", marginBottom: "50px" }}
							>
								Reset
							</Button>
						</Grid>
					</Grid>
				</form>
			</Box>
		</>
	);
};
export default RegisterCourse;
