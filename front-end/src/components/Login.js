import { useState, useContext } from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	TextField,
	Button,
	Link,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const linkStyle = {
	color: "blue",
	backgroundColor: "white",
	cursor: "pointer",
};

const Login = ({ setOpen }) => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [awaitingCode, setAwaitingCode] = useState(false);
	const [code, setCode] = useState("");
	const { login, logout, handleConfirmation, setShowLogin } =
		useContext(AuthContext);
	const [error, setError] = useState(null);

	const handleLogin = async () => {
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
		try {
			const result = handleConfirmation(email, code);
			if (result.isSignUpComplete) {
				setOpen(false);
				setShowLogin(false);
			}
		} catch (error) {
			console.log(error);
			setError("Invalid code entered.");
		}
	};

	return (
		<Card
			sx={{
				p: 2,
				maxWidth: 350,
			}}
		>
			<CardContent>
				<Typography gutterBottom variant="h6">
					Log in
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
					<Grid xs={12} item>
						<Button
							style={{
								color: "white",
								backgroundColor: "green",
								textTransform: "capitalize",
							}}
							variant="contained"
							fullWidth
							onClick={logout}
						>
							Log out [Temporary Button]
						</Button>
					</Grid>
					<Grid xs={12} textAlign={"center"} item>
						No account?
						<Link href="./register" sx={linkStyle}>
							{" "}
							Register Now
						</Link>
					</Grid>
					<Grid xs={12} textAlign={"center"} item>
						<Link to="/ForgotPassword" sx={linkStyle}>
							Forgot Password?
						</Link>
					</Grid>
					<Grid xs={12} textAlign={"center"} item>
						<Typography color={"error"}>{error}</Typography>
						{awaitingCode && (
							<TextField
								name="code"
								type="text"
								placeholder="Enter code"
								variant="outlined"
								fullWidth
								size="small"
								value={code}
								onChange={(event) => setCode(event.target.value)}
							/>
						)}
					</Grid>
					{awaitingCode && (
						<Grid xs={12} item>
							<Button
								style={{
									color: "white",
									backgroundColor: "green",
									textTransform: "capitalize",
								}}
								variant="contained"
								fullWidth
								onClick={handleConfirm}
							>
								Submit Code
							</Button>
						</Grid>
					)}
				</Grid>
			</CardContent>
		</Card>
	);
};
export default Login;
