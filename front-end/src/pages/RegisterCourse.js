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
} from "@mui/material";
import axios from "axios";
import { useFormik } from "formik";
import { v4 as uuid } from "uuid";
import { registrationValidationSchema } from "../schemas/registrationValidationSchema";

const RegisterCourse = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const registerStudent = (event) => {
		navigate("/checkout");
	};
	const formik = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			phoneNumber: "",
			email: "",
			street: "",
			city: "",
			state: "",
			zip: "",
			country: "",
			dateOfBirth: "",
			password: "",
			confirmPassword: "",
		},
		validationSchema: registrationValidationSchema,
		onSubmit: (values, event) => {
			values.id = uuid();
			axios
				.post(
					`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/registration`,
					values,
					{
						headers: {
							"Content-Type": "application/json",
							"Access-Control-Allow-Origin": "*",
							"Access-Control-Allow-Methods": "OPTIONS,POST",
						},
					},
				)
				.then((res) => {
					registerStudent();
				})
				.catch((err) => console.log(err));
		},
	});
	return (
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
			<form onSubmit={formik.handleSubmit}>
				<Grid container spacing={2}>
					<Grid xs={12} sm={6} item>
						<TextField
							label="First Name"
							placeholder="Enter first name"
							fullWidth
							id="firstName"
							name="firstName"
							value={formik.values.firstName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.firstName && Boolean(formik.errors.firstName)
							}
							helperText={formik.touched.firstName && formik.errors.firstName}
						/>
					</Grid>
					<Grid xs={12} sm={6} item>
						<TextField
							label="Last Name"
							placeholder="Enter last name"
							variant="outlined"
							fullWidth
							id="lastName"
							name="lastName"
							value={formik.values.lastName}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.lastName && Boolean(formik.errors.lastName)}
							helperText={formik.touched.lastName && formik.errors.lastName}
						/>
					</Grid>
					<Grid xs={6} item>
						<TextField
							type="number"
							label="Phone"
							placeholder="Enter phone number"
							variant="outlined"
							fullWidth
							id="phoneNumber"
							name="phoneNumber"
							value={formik.values.phoneNumber}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.phoneNumber && Boolean(formik.errors.phoneNumber)
							}
							helperText={
								formik.touched.phoneNumber && formik.errors.phoneNumber
							}
						/>
					</Grid>
					<Grid xs={6} item>
						<TextField
							type="email"
							label="Email"
							placeholder="Enter email"
							variant="outlined"
							fullWidth
							id="email"
							name="email"
							value={formik.values.email}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.email && Boolean(formik.errors.email)}
							helperText={formik.touched.email && formik.errors.email}
						/>
					</Grid>
					<Grid xs={12} item>
						<TextField
							label="Street"
							placeholder="Enter street"
							variant="outlined"
							fullWidth
							id="street"
							name="street"
							value={formik.values.street}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.street && Boolean(formik.errors.street)}
							helperText={formik.touched.street && formik.errors.street}
						/>
					</Grid>
					<Grid xs={12} sm={4} item>
						<TextField
							label="City"
							placeholder="Enter city"
							variant="outlined"
							fullWidth
							id="city"
							name="city"
							value={formik.values.city}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.city && Boolean(formik.errors.city)}
							helperText={formik.touched.city && formik.errors.city}
						/>
					</Grid>
					<Grid xs={12} sm={4} item>
						<TextField
							label="State / Province"
							placeholder="Enter state / province of residence"
							variant="outlined"
							fullWidth
							id="state"
							name="state"
							value={formik.values.state}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.state && Boolean(formik.errors.state)}
							helperText={formik.touched.state && formik.errors.state}
						/>
					</Grid>
					<Grid type="number" xs={12} sm={4} item>
						<TextField
							label="Zip"
							placeholder="Enter zip"
							variant="outlined"
							fullWidth
							id="zip"
							name="zip"
							value={formik.values.zip}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.zip && Boolean(formik.errors.zip)}
							helperText={formik.touched.zip && formik.errors.zip}
						/>
					</Grid>
					<Grid xs={6} item>
						<TextField
							label="Country"
							placeholder="Enter Country"
							variant="outlined"
							fullWidth
							id="zip"
							name="country"
							value={formik.values.country}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.country && Boolean(formik.errors.country)}
							helperText={formik.touched.country && formik.errors.country}
						/>
					</Grid>
					<Grid xs={6} item>
						<TextField
							type="Date"
							label="Date of birth"
							variant="outlined"
							fullWidth
							name="dateOfBirth"
							value={formik.values.dateOfBirth}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.dateOfBirth && Boolean(formik.errors.dateOfBirth)
							}
							helperText={
								formik.touched.dateOfBirth && formik.errors.dateOfBirth
							}
							InputLabelProps={{
								shrink: true,
							}}
						/>
					</Grid>
					<Grid xs={6} item>
						<TextField
							label="Password"
							placeholder="Enter your password"
							variant="outlined"
							fullWidth
							id="password"
							name="password"
							type="password"
							value={formik.values.password}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={formik.touched.password && Boolean(formik.errors.password)}
							helperText={formik.touched.password && formik.errors.password}
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
							type="password"
							placeholder="Enter your password"
							variant="outlined"
							fullWidth
							id="confirmPassword"
							name="confirmPassword"
							value={formik.values.confirmPassword}
							onChange={formik.handleChange}
							onBlur={formik.handleBlur}
							error={
								formik.touched.confirmPassword &&
								Boolean(formik.errors.confirmPassword)
							}
							helperText={
								formik.touched.confirmPassword && formik.errors.confirmPassword
							}
						/>
						<span style={{ color: "red" }}></span>
					</Grid>
					<Grid xs={12} item></Grid>
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
							variant="contained"
							style={{ backgroundColor: "green", marginBottom: "50px" }}
						>
							Reset
						</Button>
					</Grid>
				</Grid>
			</form>
		</Box>
	);
};
export default RegisterCourse;
