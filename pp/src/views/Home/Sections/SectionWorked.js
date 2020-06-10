import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { lightBlue } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: lightBlue,
  },
}));

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
      <div className={classes.title}>
        <h2>20 Years of Proven Success</h2>
      </div>
      <Grid className={classes.paper} container spacing={3} color={"info"}>
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>+1 Million BOE Allocated</Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>Over 100,000 Wells Manged</Paper>
        </Grid>
        <Grid item xs={6} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            1,000{"'"}s of Completed Regulatory Reports
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
