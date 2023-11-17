import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./App.css";
import CheckoutForm from "./pages/CheckoutForm";
import CourseDetails from "./pages/CourseDetails";
import CourseMaterals from "./pages/CourseMaterals";
import Courses from "./pages/Courses";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import PaymentSuccessful from "./pages/PaymentSuccessful";
import Register from "./pages/Register";
import UserInformationScreen from "./pages/UserInformationScreen";

const theme = createTheme({
	typography: {
		allVariants: {
			fontFamily: "Rubik",
		},
	},
});

const queryClient = new QueryClient();
const App = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<ThemeProvider theme={theme}>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route index element={<Home />} />
							<Route path="/courses" element={<Courses />} />
							<Route path="/course-details" element={<CourseDetails />} />
							<Route path="/register" element={<Register />} />
							<Route path="/user" element={<UserInformationScreen />} />
							<Route path="/checkout" element={<CheckoutForm />} />
							<Route path="/payment-complete" element={<PaymentSuccessful />} />
							<Route path="/course-materials" element={<CourseMaterals />} />
						</Route>
					</Routes>
				</BrowserRouter>
			</ThemeProvider>
			<ReactQueryDevtools initialIsOpen={false} />
		</QueryClientProvider>
	);
};
export default App;
