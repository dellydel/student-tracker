import { Card, CardContent, Typography, Grid, Button } from "@mui/material";
const CourseDetail = ({
  courseName,
  duration,
  technology,
  description,
  price,
  outline,
}) => {
  return (
    <>
      <Card
        style={{
          maxWidth: 700,
          marginTop: "80px",
          marginLeft: "auto",
          marginRight: "auto",
          border: "1 solid grey",
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h6">
            Course Detail
          </Typography>
          <p></p>
          <form>
            <Grid container spacing={2}>
              <Grid xs={6} item style={{ display: "flex" }}>
                <span
                  style={{
                    textAlign: "left",
                    marginBottom: "0px",
                    color: "grey",
                  }}
                >
                  Course name:{courseName}
                </span>
              </Grid>
              <Grid xs={6} item>
                <span
                  style={{
                    textAlign: "left",
                    padding: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "grey",
                  }}
                >
                  Duration:{duration}
                </span>
              </Grid>
              <Grid xs={6} item style={{ display: "flex" }}>
                <span
                  style={{
                    textAlign: "left",
                    marginBottom: "0px",
                    color: "grey",
                  }}
                >
                  Technology used:{technology}
                </span>
              </Grid>
              <Grid xs={6} item>
                <span
                  style={{
                    textAlign: "left",
                    padding: "0px",
                    marginTop: "0px",
                    marginBottom: "0px",
                    color: "grey",
                  }}
                >
                  Description: {description}
                </span>
              </Grid>
              <Grid xs={12} item style={{ display: "flex" }}>
                <span
                  style={{
                    textAlign: "left",
                    marginBottom: "0px",
                    color: "grey",
                  }}
                >
                  Course outline:{outline}
                </span>
                <ul>
                  <li></li>
                </ul>
              </Grid>
              <Grid xs={12} item style={{ display: "flex" }}>
                <span
                  style={{
                    textAlign: "left",
                    marginBottom: "0px",
                    color: "grey",
                  }}
                >
                  Price:{price}
                </span>
              </Grid>
              <Grid xs={12} item>
                <Button
                  style={{
                    color: "white",
                    backgroundColor: "green",
                    textTransform: "capitalize",
                  }}
                  type="submit"
                  variant="contained"
                  fullWidth
                >
                  Register Now
                </Button>
              </Grid>
              <Grid xs={12} item></Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </>
  );
};
export default CourseDetail;
