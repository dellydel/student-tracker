import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";
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
	Alert,
} from "@mui/material";
import axios from "axios";
import * as yup from "yup";

const RegisterCourse = () => {
	const navigate = useNavigate();
	const { state } = useLocation();
	const registerStudent = (event) => {
		navigate("/checkout");
	};
	const schema = yup.object().shape({
		firstName: yup.string().required("Please enter firstname").min(2).max(30),
		lastName: yup.string().required("Please enter lastname").min(2).max(30),
		phoneNumber: yup
			.string()
			.required("Please enter phone number")
			.matches(/^[0-9]+$/, "Not a valid phone number"),
		email: yup
			.string()
			.email("Not a valid email")
			.required("Please enter email"),
		street: yup.string().required("Please enter the street address"),
		city: yup.string().required("Please enter your city"),
		state: yup.string().required("Please enter your state"),
		zip: yup
			.string()
			.required("Please enter zip code")
			.matches(/^[0-9]+$/, "Only digits allowed"),
		country: yup.string().required("Please enter country"),
		dateOfBirth: yup
			.date()
			.typeError("invalid date of birth !")
			.required("Please enter the date of birth")
			.max(
				new Date(new Date().getFullYear() - 10, 0, 1),
				"must be 10 years old",
			),
		password: yup.string().min(8).max(20).required("Please enter password"),
		confirmPassword: yup
			.string()
			.oneOf(
				[yup.ref("password")],
				"Password and the Confirm Password did not match",
			)
			.required("Please confirm password"),
	});
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(schema),
	});
	const onSubmit = (data, event) => {
		event.preventDefault();
		axios
			.post(
				`${process.env.REACT_APP_API_GATEWAY_BASE_URL}/registration`,
				data,
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
				<Alert severity="success">{res.body}</Alert>;
			})
			.catch((err) => console.log(err));
	};

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
						<span style={{ color: "red" }}>{errors.phoneNumber?.message}</span>
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
							name="zip"
						/>
						<span style={{ color: "red" }}>{errors.zip?.message}</span>
					</Grid>
					<Grid xs={6} item>
						<TextField
							label="Country"
							name="country"
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
							name="dateOfBirth"
							label="Date of birth"
							variant="outlined"
							fullWidth
							{...register("dateOfBirth")}
							InputLabelProps={{
								shrink: true,
							}}
						/>
						<span style={{ color: "red" }}>{errors.dateOfBirth?.message}</span>
					</Grid>
					<Grid xs={6} item>
						<TextField
							label="Password"
							type="password"
							placeholder="Enter your password"
							variant="outlined"
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
							// onClick={}
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
