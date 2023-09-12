import React from "react";
import { AppBar, Toolbar, Typography, Link, Box, Stack } from "@mui/material";
function Navigation() {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Typography
              variant="h2"
              component="div"
              sx={{ flexGrow: 1 }}
            ></Typography>
            <Stack direction="row" spacing={2}>
              <Link href="/LandingPage" color="inherit" underline="none">
                Home
              </Link>
              <Link href="/view-courses" color="inherit" underline="none">
                View Courses
              </Link>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navigation;
