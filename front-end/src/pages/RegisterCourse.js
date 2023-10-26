import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	TextField,
	Button,
	Box,
} from "@mui/material";

//import axios from "axios";

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
	//const [registerStatus, setRegisterStatus] = useState(null);
	const { courseName } = useParams();

	const resetForm = () => {
		setFeedBackText("");
		//setRegisterStatus("");
	};

	// const revalidateEmailAndBuildJsonData = () => {
	// 	if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
	// 		document.forms[0].email.focus();
	// 		setFeedBackText("Enter a valid Email..");
	// 		return false;
	// 	}
	// 	const thisYear = new Date().getFullYear();
	// 	const birthYear = new Date(dateOfBirth).getFullYear();
	// 	if (parseInt(thisYear - birthYear) < 10) {
	// 		setFeedBackText("Student must be more than 10 years old..");
	// 		document.forms[0].dateOfBirth.focus();
	// 		return false;
	// 	}
	// 	const id = email + new Date().getTime();
	// 	const formData = {
	// 		Item: {
	// 			id,
	// 			firstName,
	// 			lastName,
	// 			phoneNumber,
	// 			email,
	// 			street,
	// 			city,
	// 			state,
	// 			zip,

	// 			dateOfBirth,
	// 		},
	// 		TableName: "course-reg-dynamodb-2023",
	// 	};
	// 	return formData;
	// };

	const registerStudent = (event) => {
		navigate("/checkout");
		// setFeedBackText("");
		// const jsonData = revalidateEmailAndBuildJsonData();
		// if (!jsonData) {
		// 	event.preventDefault();
		// } else {
		// 	event.preventDefault();
		// 	const url =
		// 		"https://xj1tbr7we0.execute-api.us-east-1.amazonaws.com/test/course-reg-lambda-2023";
		// 	functionPost(url, jsonData);
		// 	console.log(registerStatus);
		// 	if (registerStatus) {
		// 		setFeedBackText("Congratulations! You have successfully registered.");
		// 	} else {
		// 		setFeedBackText("Something went wrong! Please try again later.");
		// 	}
		// }
	};

	// const functionPost = async (url, jsonData) => {
	// 	setIsLoading(true);
	// 	axios
	// 		.post(url, jsonData)
	// 		.then((response) => {
	// 			setIsLoading(false);
	// 			setRegisterStatus(true);
	// 			console.log(response);
	// 		})
	// 		.catch((error) => {
	// 			setIsLoading(false);
	// 			setRegisterStatus(false);
	// 			console.log(error);
	// 		});
	// };
	return (
		<Box sx={{ maxWidth: "1050px", margin: "0 auto", padding: "0 20px" }}>
			<Card style={{ maxWidth: 550, margin: "0 auto" }}>
				<CardContent>
					<Typography gutterBottom variant="h5">
						{courseName}
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
							<Grid xs={12} item>
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
							<Grid xs={12} item>
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
							<Grid xs={12} item>
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
							<Grid xs={12} item>
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
							<Grid xs={12} item>
								<div>{isLoading ? "Loading..." : feedBackText}</div>
							</Grid>
							<Grid xs={12} sm={6} item>
								<Button
									type="submit"
									variant="contained"
									style={{ backgroundColor: "green" }}
									fullWidth
								>
									Submit
								</Button>
							</Grid>
							<Grid xs={12} sm={6} item>
								<Button
									type="reset"
									onClick={resetForm}
									variant="contained"
									fullWidth
								>
									Reset
								</Button>
							</Grid>
						</Grid>
					</form>
				</CardContent>
			</Card>
		</Box>
	);
};
export default RegisterCourse;
