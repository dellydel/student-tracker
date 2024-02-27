import { useState, useContext } from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	TextField,
	Button,
	Box,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AuthContext } from "../context/AuthContext";

const linkStyle = {
	color: "blue",
	backgroundColor: "white",
	cursor: "pointer",
	margin: "0 10px",
};

const Login = ({ setOpen }) => {
	const router = useRouter();
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [awaitingCode, setAwaitingCode] = useState(false);
	const [awaitingNewPassword, setAwaitingNewPassword] = useState(false);
	const [code, setCode] = useState("");
	const {
		login,
		handleConfirmation,
		setShowLogin,
		forgotPassword,
		handleConfirmResetPassword,
	} = useContext(AuthContext);
	const [error, setError] = useState(null);
	const [resetPassword, setResetpassword] = useState(false);

	const handleLogin = async () => {
		setError();
		const result = await login(email, password);
		switch (result.type) {
			case "success":
				setOpen(false);
				break;
			case "nextSteps":
				setAwaitingCode(true);
				break;
			case "error":
				setError(result.message);
				break;
			default:
				setError(result.message);
				break;
		}
	};

	const handleConfirm = async () => {
		setError();
		try {
			const result = await handleConfirmation(email, code);
			if (result.isSignUpComplete) {
				setOpen(false);
				setShowLogin(false);
				router.push("/user");
			}
		} catch (error) {
			console.log(error);
			setError("Invalid code entered.");
		}
	};

	const handleConfirmPasswordReset = async () => {
		setError();
		const result = await handleConfirmResetPassword({
			username: email,
			confirmationCode: code,
			newPassword: password,
		});
		if (result.error) {
			setError(result.error.message);
		} else {
			setAwaitingCode(false);
			setAwaitingNewPassword(false);
		}
	};

	const handleForgotPassword = async () => {
		setError();
		const result = await forgotPassword(email);
		if (result.error) {
			if (result.error.name === "EmptyResetPasswordUsername") {
				setError("Email address is required.");
			}
		} else if (result.codeSent) {
			setResetpassword(false);
			setAwaitingNewPassword(true);
		} else if (result.complete) {
			setOpen(false);
			setShowLogin(false);
			router.push("/user");
		}
	};

	return (
		<Card sx={{ padding: 1 }}>
			<CardContent>
				<Typography gutterBottom variant="h6">
					{!resetPassword && !awaitingNewPassword && "Log in"}
					{resetPassword && "Forgot Password"}
					{awaitingNewPassword && "Reset Password"}
				</Typography>
				<Grid container spacing={2}>
					<Grid xs={12} item>
						<h5
							style={{
								textAlign: "left",
								marginBottom: "0px",
								color: "grey",
							}}
						>
							Email
						</h5>
						<TextField
							type="email"
							name="email"
							placeholder="Enter email"
							variant="outlined"
							fullWidth
							size="small"
							value={email}
							required
							onChange={(event) => setEmail(event.target.value)}
						/>
					</Grid>
					{!resetPassword && (
						<Grid xs={12} item>
							<h5
								style={{
									textAlign: "left",
									padding: "0px",
									marginTop: "0px",
									marginBottom: "0px",
									color: "grey",
								}}
							>
								Password
							</h5>
							<TextField
								name="password"
								type="password"
								placeholder="Enter password"
								variant="outlined"
								fullWidth
								size="small"
								required
								value={password}
								onChange={(event) => setPassword(event.target.value)}
							/>
						</Grid>
					)}
					{!resetPassword && !awaitingNewPassword && !awaitingCode && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								type="submit"
								variant="contained"
								fullWidth
								onClick={handleLogin}
							>
								Log in
							</Button>
						</Grid>
					)}
					{resetPassword && !awaitingNewPassword && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								type="submit"
								variant="contained"
								fullWidth
								onClick={handleForgotPassword}
							>
								Send Code
							</Button>
						</Grid>
					)}
					{!awaitingNewPassword && !awaitingCode && (
						<Grid xs={12} textAlign={"center"} item>
							No account?
							<Link href="/register" style={linkStyle}>
								Register Now
							</Link>
						</Grid>
					)}
					{!resetPassword && !awaitingNewPassword && !awaitingCode && (
						<Grid xs={12} textAlign={"center"} item>
							<a onClick={() => setResetpassword(true)} style={linkStyle}>
								Forgot Password?
							</a>
						</Grid>
					)}
					{(awaitingCode || awaitingNewPassword) && (
						<>
							<Grid xs={12} textAlign={"center"} item>
								<Typography sx={{ p: 2 }}>
									Please validate your email address and confirm your account
									creation by entering the 6 digit code that was sent to you.
								</Typography>
							</Grid>
							<Grid xs={12} textAlign={"center"} item>
								<h5
									style={{
										textAlign: "left",
										padding: "0px",
										marginTop: "0px",
										marginBottom: "0px",
										color: "grey",
									}}
								>
									Validation Code
								</h5>
								<TextField
									name="code"
									type="text"
									placeholder="Enter code from email"
									variant="outlined"
									fullWidth
									size="small"
									value={code}
									onChange={(event) => setCode(event.target.value)}
								/>
							</Grid>
						</>
					)}
					{(awaitingCode || awaitingNewPassword) && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								variant="contained"
								fullWidth
								onClick={
									awaitingNewPassword
										? handleConfirmPasswordReset
										: handleConfirm
								}
							>
								{awaitingCode && "Submit Code"}
								{awaitingNewPassword && "Set New Password"}
							</Button>
						</Grid>
					)}
					{awaitingNewPassword && !awaitingNewPassword && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								type="submit"
								variant="contained"
								fullWidth
								onClick={handleForgotPassword}
							>
								Send Code
							</Button>
						</Grid>
					)}
					<Grid xs={12} item>
						<Box sx={{ display: "flex", justifyContent: "center" }}>
							<Typography color={"error"}>{error}</Typography>
						</Box>
					</Grid>
				</Grid>
			</CardContent>
		</Card>
	);
};
export default Login;
