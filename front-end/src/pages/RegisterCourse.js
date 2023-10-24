import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Typography, Grid, TextField, Button, Box } from "@mui/material";

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
	const [feedBackText, setFeedBackText] = useState("");
	const [isLoading] = useState(false);
	const { courseName } = useParams();
	const resetForm = () => {
		setFeedBackText("");
	};
	const registerStudent = (event) => {
		navigate("/checkout");
	};
	return (
		<Box
			sx={{
				maxWidth: "1050px",
				width: "auto",
				margin: "0 auto",
				padding: "0 20px",
				marginBottom: "70px",
			}}
		>
			<Typography gutterBottom variant="h5">
				{courseName}
			</Typography>
			<Typography
				gutterBottom
				color="textSecondary"
				variant="body2"
				component="p"
				marginTop={"20px"}
				marginBottom={"20px"}
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
					<Grid xs={12} sm={6} item>
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
					<Grid xs={12} sm={6} item>
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
					<Grid xs={12} sm={6} item>
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
					<Grid xs={12} sm={6} item>
						<TextField
							type="Date"
							name="dateOfBirth"
							label="Date of birth"
							variant="outlined"
							fullWidth
							required
							onChange={(event) => setDateOfBirth(event.target.value)}
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
							style={{ backgroundColor: "green" }}
							onClick={resetForm}
							variant="contained"
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
