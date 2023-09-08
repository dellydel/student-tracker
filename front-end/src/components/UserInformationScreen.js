import React from "react";
import courseList from "./courseList";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";

const UserInformationScreen = () => {
  return (
    <div>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          background: "green",
          fontSize: 30,
          color: "white",
          fontWeight: 600,
        }}
      >
        Course List
      </Typography>
      <List>
        {courseList.map((course) => (
          <Course course={course} key={course.name} />
        ))}
      </List>
    </div>
  );
};

function Course({ course }) {
  return (
    <>
      <b>
        <ListItem alignItems="flex-start">{course.name} </ListItem>
      </b>
      <ListItem alignItems="flex-start">{course.description} </ListItem>
      <ListItem alignItems="flex-start">{course.Price}</ListItem>
      <p>
        <Divider />
      </p>
    </>
  );
}
export default UserInformationScreen;
