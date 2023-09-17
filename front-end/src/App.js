import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import "./App.css";
import "./App.css";
import RegisterCourse from "./components/RegisterCourse";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import CourseList from "./components/CourseList";
import LandingPage from "./components/LandingPage";
import Layout from "./components/Layout";
import RegisterCourse from "./components/RegisterCourse";
import UserInformationScreen from "./components/UserInformationScreen";

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
						<Route index element={<LandingPage />} />
						<Route path="/user" element={<UserInformationScreen />} />
						<Route path="/courses" element={<CourseList />} />
						<Route path="/course-details" element={<CourseDetail />} />
						<Route path="/view-courses" element={<CourseList />} />
						<Route path="/register" element={<RegisterCourse />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</ThemeProvider>
	);
};
export default App;
