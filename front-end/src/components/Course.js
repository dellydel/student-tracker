import React from "react";
import { Card, Grid } from "@mui/material";

function Course({ id, title, detail }) {
  return (
    <Card
      style={{
        maxWith: "600",
        marginTop: "70",
        marginLeft: "auto",
        marginRight: "auto",
      }}
    >
      <Grid container spacing={1} style={{ border: "1 solid black" }}>
        <Grid
          item
          xs={12}
          style={{ textAlign: "center", justifyItem: "center", margin: "2px" }}
        >
          <hr />
          <div key={id}>
            <span>
              {` ${title} ${detail.duration} ${detail.cost}
              `}
            </span>
          </div>
        </Grid>
      </Grid>
    </Card>
  );
}

export default Course;
