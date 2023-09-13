import "./App.css";
import LandingPage from "./components/LandingPage";
import SuccessPopup from "./components/SuccessPopup";
import UserInformationScreen from "./components/UserInformationScreen";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <UserInformationScreen />
      <SuccessPopup />
    </div>
  );
}

export default App;
