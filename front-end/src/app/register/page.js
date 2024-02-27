"use client";

import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
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
} from "@mui/material";
import { Snackbar, Alert } from "@mui/material";
import { Amplify } from "aws-amplify";
import { signUp } from "aws-amplify/auth";
import axios from "axios";
import awsconfig from "../../aws-exports";
import { AuthContext } from "../../context/AuthContext";
import { registrationText } from "../../data/registrationContent";
import { registrationSchema } from "../../schemas/registrationSchema";

Amplify.configure(awsconfig);

const Register = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(registrationSchema),
	});

	const { setShowLogin } = useContext(AuthContext);
	const [snackbarState, setSnackbarState] = useState({
		isOpen: false,
		message: "",
		type: "success",
	});

	const onSubmit = async (data, event) => {
		event.preventDefault();
		const dateOptions = { month: "2-digit", day: "2-digit", year: "numeric" };
		const password = data.password;
		const username = data.email;

		try {
			const { userId } = await signUp({
				username,
				password,
				options: {
					userAttributes: {
						address:
							data.street +
							" " +
							data.city +
							" " +
							data.state +
							" " +
							data.zip +
							" " +
							data.country,
						birthdate: data.dateOfBirth.toLocaleDateString(
							"en-US",
							dateOptions,
						),
						email: data.email,
						name: data.firstName + " " + data.lastName,
						phone_number: "+" + data.phoneNumber,
					},
				},
				autoSignIn: true,
			});
			delete data.password;
			delete data.confirmPassword;
			axios
				.post(`${process.env.NEXT_PUBLIC_API_GATEWAY_BASE_URL}/students`, {
					...data,
					id: userId.toString(),
				})
				.then((res) => {
					reset();
					setSnackbarState({
						type: "success",
						message: res.data,
						isOpen: true,
					});
					setShowLogin(true);
				})
				.catch((err) => {
					setSnackbarState({
						type: "error",
						message: err.message,
						isOpen: true,
					});
				});
		} catch (error) {
			setSnackbarState({
				type: "error",
				message: "An error has occurred: " + error.message,
				isOpen: true,
			});
		}
	};

	return (
		<>
			<Snackbar
				open={snackbarState.isOpen}
				autoHideDuration={6000}
				onClose={() => setSnackbarState({ ...snackbarState, isOpen: false })}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<Alert
					onClose={() => setSnackbarState({ ...snackbarState, isOpen: false })}
					severity={snackbarState.type}
					sx={{ width: "100%" }}
				>
					<>{snackbarState.message}</>
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
				<Typography variant="h5" sx={{ my: 4 }}>
					Sign up for your new NextByte Account
				</Typography>

				<form onSubmit={handleSubmit(onSubmit)}>
					<Grid container spacing={2}>
						<Grid xs={12} sm={6} item>
							<TextField
								label="First Name"
								placeholder="Enter first name"
								fullWidth
								{...register("firstName")}
							/>
							<span style={{ color: "red" }}>{errors.firstName?.message}</span>
						</Grid>
						<Grid xs={12} sm={6} item>
							<TextField
								label="Last Name"
								placeholder="Enter last name"
								variant="outlined"
								fullWidth
								{...register("lastName")}
							/>
							<span style={{ color: "red" }}>{errors.lastName?.message}</span>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="number"
								label="Phone"
								placeholder="Enter phone number"
								variant="outlined"
								fullWidth
								{...register("phoneNumber")}
							/>
							<span style={{ color: "red" }}>
								{errors.phoneNumber?.message}
							</span>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="email"
								label="Email"
								placeholder="Enter email"
								variant="outlined"
								fullWidth
								{...register("email")}
							/>
							<span style={{ color: "red" }}>{errors.email?.message}</span>
						</Grid>
						<Grid xs={12} item>
							<TextField
								label="Street"
								placeholder="Enter street"
								variant="outlined"
								fullWidth
								{...register("street")}
							/>
							<span style={{ color: "red" }}>{errors.street?.message}</span>
						</Grid>
						<Grid xs={12} sm={4} item>
							<TextField
								label="City"
								placeholder="Enter city"
								variant="outlined"
								fullWidth
								{...register("city")}
							/>
							<span style={{ color: "red" }}>{errors.city?.message}</span>
						</Grid>
						<Grid xs={12} sm={4} item>
							<TextField
								label="State / Province"
								placeholder="Enter state / province of residence"
								variant="outlined"
								fullWidth
								{...register("state")}
							/>
							<span style={{ color: "red" }}>{errors.state?.message}</span>
						</Grid>
						<Grid type="number" xs={12} sm={4} item>
							<TextField
								label="Zip"
								placeholder="Enter zip"
								variant="outlined"
								fullWidth
								{...register("zip")}
							/>
							<span style={{ color: "red" }}>{errors.zip?.message}</span>
						</Grid>
						<Grid xs={6} item>
							<TextField
								label="Country"
								placeholder="Enter Country"
								variant="outlined"
								fullWidth
								{...register("country")}
							/>
							<span style={{ color: "red" }}>{errors.country?.message}</span>
						</Grid>
						<Grid xs={6} item>
							<TextField
								type="Date"
								label="Date of birth"
								variant="outlined"
								fullWidth
								{...register("dateOfBirth")}
								InputLabelProps={{
									shrink: true,
								}}
							/>
							<span style={{ color: "red" }}>
								{errors.dateOfBirth?.message}
							</span>
						</Grid>
						<Grid xs={6} item>
							<TextField
								label="Password"
								placeholder="Enter your password"
								variant="outlined"
								type="password"
								fullWidth
								{...register("password")}
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
							<span style={{ color: "red" }}>{errors.password?.message}</span>
						</Grid>
						<Grid xs={6} item>
							<TextField
								label="Confirm Password"
								type="password"
								placeholder="Enter your password"
								variant="outlined"
								fullWidth
								{...register("confirmPassword")}
							/>
							<span style={{ color: "red" }}>
								{errors.confirmPassword?.message}
							</span>
						</Grid>
						<Grid xs={12} item></Grid>
						<Grid item>
							<Button type="submit" variant="contained" color="success">
								Submit
							</Button>
						</Grid>
						<Grid item>
							<Button onClick={reset} variant="outlined">
								Reset
							</Button>
						</Grid>
					</Grid>
				</form>

				<Typography
					style={{
						marginTop: "50px",
						marginBottom: "20px",
						textAlign: "center",
					}}
				>
					{registrationText}
				</Typography>
			</Box>
		</>
	);
};
export default Register;
