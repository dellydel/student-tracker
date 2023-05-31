import { Card, CardContent, Typography, Grid, TextField, Button } from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'

const RegisterCourse = () =>{
  return(
    <>
    <Card style={{maxWidth:550, margin:"0 auto"}}>
    <CardContent>
      <Typography gutterBottom variant='h5'>Register for your online course</Typography>
      <Typography gutterBottom color="textSecondary" variant='body2' component="p">All fields are compulsory, ensure all details are correct.</Typography>
      
      <p></p>
      <form>
      <Grid container spacing={1}>
        <Grid xs={12} sm={6} item>
          <TextField label="First Name" placeholder='Enter first name' fullWidth required/>
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField label="Last Name" placeholder='Enter last name' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} item>
          <TextField type='number' label="Phone" placeholder='Enter phone number' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} item>
          <TextField type='email' label="Email" placeholder='Enter email' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} sm={9} item>
          <TextField label="Street" placeholder='Enter street' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} sm={3} item>
          <TextField type='number' label="Apt#" placeholder='Enter house number' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} sm={4} item>
          <TextField label="City" placeholder='Enter city' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} sm={4} item>
          <TextField label="State / Province" placeholder='Enter state / province of residence' variant='outlined' fullWidth required/>
        </Grid>
        <Grid type='number' xs={12} sm={4} item>
          <TextField label="Zip" placeholder='Enter zip' variant='outlined' fullWidth required/>
        </Grid>
        <Grid xs={12} item>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker disableFuture fullWidth/>
          </LocalizationProvider>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Button type='submit' variant='contained' fullWidth>Submit</Button>
        </Grid>
        <Grid xs={12} sm={6} item>
          <Button type='reset' variant='contained' fullWidth>Reset</Button>
        </Grid>
      </Grid>
      </form>
    </CardContent>
    </Card>    </>
  )

}; export default RegisterCourse;