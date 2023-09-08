import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import { Typography } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const LandingPage = () => {
  return (
    <div>
      <Container maxWidth="auto">
        <Box sx={{ bgcolor: "gray", height: "100vh" }}>
          <AppBar position="static">
            <Toolbar>
              <Button variant="contained">Login</Button>
              <div style={{ flexGrow: 1 }}></div>
              <Stack
                direction="row"
                spacing={1}
                justifyContent="flex-end"
                alignItems="baseline"
              >
                <Typography>User Name</Typography>
                <Avatar sx={{ width: 40, height: 40 }}>ID</Avatar>
              </Stack>
            </Toolbar>
          </AppBar>
        </Box>
      </Container>
    </div>
  );
};

export default LandingPage;
