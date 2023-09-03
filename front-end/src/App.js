import "./App.css";
import { Typography } from "@mui/material";
import RegisterCourse from "./components/RegisterCourse";
import Navigation from "./components/Navigation";
import Login from "./components/Login";
const App = () => {
  return (
    <div className="App">
      <Typography gutterBottom variant="h4">
        Course Registration Form
      </Typography>
      <RegisterCourse />
      <Navigation />
      <Login />
    </div>
  );
};

export default App;
