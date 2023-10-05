import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import CourseDetails from "./pages/CourseDetails";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import RegisterCourse from "./pages/RegisterCourse";
import UserInformationScreen from "./pages/UserInformationScreen";

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: "Rubik",
		},
	},
});
const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Layout />}>
						<Route index element={<Home />} />
						<Route path="/courses" element={<Courses />} />
						<Route path="/course-details" element={<CourseDetails />} />
						<Route path="/register/:formTitle" element={<RegisterCourse />} />
						<Route path="/user" element={<UserInformationScreen />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
export default App;
