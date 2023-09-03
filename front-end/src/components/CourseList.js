import { Card, CardContent, Grid } from "@mui/material";
import Course from "./Course";
import courseList from "./courseList.json";
function CourseList() {
  return (
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
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", justifyItem: "center" }}
        >
          <h3>List of Courses</h3>
          {courseList.map((course) => {
            return (
              <Grid
                key={course.id}
                item
                xs={12}
                style={{
                  textAlign: "center",
                  justifyItem: "center",
                }}
              >
                <div>
                  <Course
                    id={course.id}
                    title={course.title}
                    detail={course.detail}
                  />
                </div>
              </Grid>
            );
          })}
        </Grid>
      </CardContent>
    </Card>
  );
}
export default CourseList;
