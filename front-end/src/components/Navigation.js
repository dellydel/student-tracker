import React from "react";
import { AppBar, Toolbar, Typography, Button, Box, Stack } from "@mui/material";

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
              <Button color="inherit">Home</Button>
              <Button color="inherit">View Courses</Button>
            </Stack>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
}

export default Navigation;
