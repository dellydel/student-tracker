import './App.css';
import { Typography } from '@mui/material';
import RegisterCourse from './components/RegisterCourse';

const App = () => {
  return (
    <div className="App">
    <Typography gutterBottom variant='h4'>
      Course Registration Form
    </Typography>
    <RegisterCourse />
  </div>
  );
};

export default App;
