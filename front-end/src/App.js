import "./App.css";
import RegisterCourse from "./components/RegisterCourse";
import Login from "./components/Login";
import CourseList from "./components/CourseList";
import CourseDetail from "./components/CourseDetail";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LandingPage from "./components/LandingPage";
import UserInformationScreen from "./components/UserInformationScreen";
const App = () => {
  return (
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
  );
};
export default App;
