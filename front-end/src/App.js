import logo from './logo.svg';
import './App.css';
import Landingpage from './components/Landingpage';
import SuccessPopup from './components/SuccessPopup';
import UserInformationScreen from './components/UserInformationScreen';

function App() {
  return (
    <div className="App">
      <Landingpage/><p/>
      <UserInformationScreen/><p/>
      <SuccessPopup/>
    </div>
  );
}

export default App;
