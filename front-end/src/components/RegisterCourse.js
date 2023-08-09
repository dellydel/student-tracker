import {
<<<<<<< HEAD
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

const RegisterCourse = () => {
=======
  Card, CardContent, Typography, Grid, TextField, Button,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";

const RegisterCourse = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [street, setStreet] = useState("");
  const [apartmentNo, setApartmentNo] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");

  const [feedBackText, setFeedBackText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [registerStatus, setRegisterStatus] = useState(null);

  const resetForm =() =>{
    setFeedBackText("");
    setRegisterStatus("");
  }
  const revalidateEmailAndBuildJsonData = () => {
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      document.forms[0].email.focus();
      setFeedBackText("Enter a valid Email..");
      return false;
    }
    const thisYear = new Date().getFullYear();
    const birthYear = new Date(dateOfBirth).getFullYear();
    if (parseInt(thisYear - birthYear) < 10) {
      setFeedBackText("Student must be more than 10 years old..");
      document.forms[0].dateOfBirth.focus();
      return false;
    }
    const id = email + new Date().getTime();
    const formData = {
      Item: {
        id,
        firstName,
        lastName,
        phoneNumber,
        email,
        street,
        apartmentNo,
        city,
        state,
        zip,
        dateOfBirth
      },
      TableName: "course-reg-dynamodb-2023",
    };
    return formData
  };
  const registerStudent = (event) => {
    setFeedBackText("");
    const jsonData = revalidateEmailAndBuildJsonData();
    if (!jsonData) {
      event.preventDefault();
    } else {
      event.preventDefault();
      const url =
        "https://xj1tbr7we0.execute-api.us-east-1.amazonaws.com/test/course-reg-lambda-2023";
      functionPost(url, jsonData);
      console.log(registerStatus);
      if (registerStatus) {
        setFeedBackText("Congratulations! You have successfully registered.");
      } else {
        setFeedBackText("Something went wrong! Please try again later.");
      }
    }
  };
  const functionPost = async (url,  jsonData ) => {
    setIsLoading(true);
    axios.post(url, jsonData)
      .then((response) => {
        setIsLoading(false);
        setRegisterStatus(true);
        console.log(response);
      })
      .catch((error) => {
        setIsLoading(false);
        setRegisterStatus(false);
        console.log(error);
      });
  };
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
  return (
    <>
      <Card style={{ maxWidth: 550, margin: "0 auto" }}>
        <CardContent>
          <Typography gutterBottom variant="h5">
            Register for your online course
          </Typography>
          <Typography
            gutterBottom
            color="textSecondary"
            variant="body2"
            component="p"
          >
            All fields are compulsory, ensure all details are correct.
          </Typography>

          <p></p>
<<<<<<< HEAD
          <form>
            <Grid container spacing={1}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  placeholder="Enter first name"
                  fullWidth
                  required
=======
          <form onSubmit={registerStudent}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  name="firstName"
                  placeholder="Enter first name"
                  fullWidth
                  required
                  onChange={(event) => setFirstName(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
<<<<<<< HEAD
=======
                  name="lastName"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  placeholder="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
=======
                  onChange={(event) => setLastName(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
<<<<<<< HEAD
=======
                  name="phoneNumber"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  label="Phone"
                  placeholder="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
=======
                  onChange={(event) => setPhoneNumber(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
<<<<<<< HEAD
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  fullWidth
                  required
=======
                  name="email"
                  label="Email"
                  placeholder="Enter email"
                  variant="outlined"
                  onFocus={() => setFeedBackText("")}
                  fullWidth
                  required
                  onChange={(event) => setEmail(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} sm={9} item>
                <TextField
                  label="Street"
<<<<<<< HEAD
=======
                  name="street"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  placeholder="Enter street"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
=======
                  onChange={(event) => setStreet(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} sm={3} item>
                <TextField
                  type="number"
                  label="Apt#"
<<<<<<< HEAD
=======
                  name="apartmentNo"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  placeholder="Enter house number"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
=======
                  onChange={(event) => setApartmentNo(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="City"
<<<<<<< HEAD
=======
                  name="city"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  placeholder="Enter city"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
=======
                  onChange={(event) => setCity(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="State / Province"
<<<<<<< HEAD
=======
                  name="state"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  placeholder="Enter state / province of residence"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
=======
                  onChange={(event) => setState(event.target.value)}
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                />
              </Grid>
              <Grid type="number" xs={12} sm={4} item>
                <TextField
                  label="Zip"
<<<<<<< HEAD
=======
                  name="zip"
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  placeholder="Enter zip"
                  variant="outlined"
                  fullWidth
                  required
<<<<<<< HEAD
                />
              </Grid>
              <Grid xs={12} item>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    disableFuture
                    fullWidth
                    label="Date of birth"
                    placeholder="Enter date of birth"
                    minDate="01-01-2013"
                  />
                </LocalizationProvider>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Button
                  type="submit"
                  variant="contained"
                  sx={{ backgroundColor: "green" }}
                  fullWidth
                >
=======
                  onChange={(event) => setZip(event.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker disableFuture fullWidth/>
          </LocalizationProvider> */}
                <TextField
                  type="Date"
                  name="dateOfBirth"
                  label="Date of birth"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setDateOfBirth(event.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <div>
                  {isLoading ? "Loading...": feedBackText}
                  
                </div>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Button type="submit" variant="contained" fullWidth>
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  Submit
                </Button>
              </Grid>
              <Grid xs={12} sm={6} item>
<<<<<<< HEAD
                <Button type="reset" variant="contained" fullWidth>
=======
                <Button type="reset" onClick={resetForm} variant="contained" fullWidth>
>>>>>>> 8606f1c09da5d8324a188cc3f282863dd5592fa4
                  Reset
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>{" "}
    </>
  );
};
export default RegisterCourse;
