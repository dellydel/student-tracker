import {
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  Link,
} from "@mui/material";
import { useState } from "react";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <Card
        style={{
          maxWidth: 300,
          marginTop: "80px",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1 solid grey",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6">
            Log in to NextByte
          </Typography>
          <p></p>
          <form>
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
                >
                  Log in
                </Button>
              </Grid>
              <Grid xs={12} item>
                <div>
                  <Link
                    to="/ForgotPassword"
                    style={{ color: "blue", backgroundColor: "white" }}
                  >
                    forgot password ?
                  </Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export default Login;
