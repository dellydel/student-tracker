import {
  Card, CardContent, Typography, Grid, TextField, Button, 
} from "@mui/material";
import axios from "axios";
import {useEffect, useState } from "react";



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
    document.getElementById("submitButton").disabled = false;
  }
  const revalidateEmailAndBuildJsonData = () => {
    let validationMessage = "";
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      validationMessage = (
        <font color='orange'>Enter a valid Email..</font>
      )
      document.forms[0].email.focus();
      setFeedBackText(validationMessage);
      return false;
    }
    const thisYear = new Date().getFullYear();
    const birthYear = new Date(dateOfBirth).getFullYear();
    if (parseInt(thisYear - birthYear) < 10) {
      validationMessage = (
        <font color='orange'>Student must be more than 10 years old..</font>
      )
      setFeedBackText(validationMessage);
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
  useEffect(() => {
    if (registerStatus !== null) {
      if (registerStatus===true) {
        let statusMessage = (
          <font color="green">
            Congratulations! You have successfully registered.
          </font>
        );
        setFeedBackText(statusMessage);
      } else if(registerStatus===false) {
        let statusMessage = (
          <font color="red">Something went wrong! Please try again later.</font>
        );
        setFeedBackText(statusMessage);
      }
    }
  }, [registerStatus]);
  const registerStudent = (event) => {
    const jsonData = revalidateEmailAndBuildJsonData();
    if (!jsonData) {
      event.preventDefault();
    } else {
      event.preventDefault();
      const url =
        "https://xj1tbr7we0.execute-api.us-east-1.amazonaws.com/test/course-reg-lambda-2023";
      functionPost(url, jsonData);
      document.getElementById("submitButton").disabled = true;
    }
  };
  const functionPost = async (url,  jsonData ) => {
    setIsLoading(true);
    axios.post(url, jsonData)
      .then((response) => {
        setIsLoading(false);
        setRegisterStatus(true);
      })
      .catch((error) => {
        setIsLoading(false);
        setRegisterStatus(false);
      });
  };
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
            All fields are required, ensure all details are correct.
          </Typography>

          <p></p>
          <form onSubmit={registerStudent}>
            <Grid container spacing={2}>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="First Name"
                  name="firstName"
                  helperText="Enter first name"
                  fullWidth
                  required
                  onChange={(event) => setFirstName(event.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={6} item>
                <TextField
                  label="Last Name"
                  name="lastName"
                  helperText="Enter last name"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setLastName(event.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="number"
                  name="phoneNumber"
                  label="Phone"
                  helperText="Enter phone number"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setPhoneNumber(event.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="email"
                  name="email"
                  label="Email"
                  helperText="Enter email"
                  variant="outlined"
                  onFocus={() => setFeedBackText("")}
                  fullWidth
                  required
                  onChange={(event) => setEmail(event.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={9} item>
                <TextField
                  label="Street"
                  name="street"
                  helperText="Enter street"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setStreet(event.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={3} item>
                <TextField
                  type="number"
                  label="Apt#"
                  name="apartmentNo"
                  helperText="Apartment No"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setApartmentNo(event.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="City"
                  name="city"
                  helperText="Enter city"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setCity(event.target.value)}
                />
              </Grid>
              <Grid xs={12} sm={4} item>
                <TextField
                  label="State / Province"
                  name="state"
                  helperText="Enter state / province"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setState(event.target.value)}
                />
              </Grid>
              <Grid type="number" xs={12} sm={4} item>
                <TextField
                  label="Zip"
                  name="zip"
                  helperText="Enter zip"
                  variant="outlined"
                  fullWidth
                  required
                  onChange={(event) => setZip(event.target.value)}
                />
              </Grid>
              <Grid xs={12} item>
                <TextField
                  type="Date"
                  name="dateOfBirth"
                  helperText="Enter date of birth"
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
                <Button type="submit" variant="contained" id="submitButton" fullWidth>
                  Submit
                </Button>
              </Grid>
              <Grid xs={12} sm={6} item>
                <Button type="reset" onClick={resetForm} variant="contained" fullWidth>
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