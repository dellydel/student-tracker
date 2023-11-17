import { useState } from "react";
import {
	Card,
	CardContent,
	Typography,
	Grid,
	TextField,
	Button,
	Link,
} from "@mui/material";

const linkStyle = {
	color: "blue",
	backgroundColor: "white",
	cursor: "pointer",
};

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
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
							onClick={() => alert("logging in")}
						>
							Log in
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
				</Grid>
			</CardContent>
		</Card>
	);
};
export default Login;
