import "./App.css";
import { Typography } from "@mui/material";
import RegisterCourse from "./components/RegisterCourse";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
const App = () => {
  return (
    <div className="App">
      <Typography gutterBottom variant="h4">
        Course Registration Form
      </Typography>
      <RegisterCourse />
      <Navigation />
      <Login />
      <CourseList />
    </div>
  );
};
export default App;
