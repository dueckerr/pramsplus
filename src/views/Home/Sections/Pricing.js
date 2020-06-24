import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: "10px",
    color: "white",
    textAlign: "center",
    backgroundColor: "rgb(2, 46, 105)",
    border: 0,
    borderRadius: 3,
  },
  text: {
    padding: "10px",
    color: "white",
    textAlign: "center",
    border: 0,
    borderRadius: 3,
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h2>Pricing</h2>
        <h3></h3>
      </div>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>Basic</Paper>
          <p className={classes.text}>Hosted Service</p>
          <p className={classes.text}>Option B</p>
          <p className={classes.text}>Option C</p>
          <p className={classes.text}>Option D</p>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>Professional</Paper>
          <p className={classes.text}>Option A</p>
          <p className={classes.text}>Option B</p>
          <p className={classes.text}>Option C</p>
          <p className={classes.text}>Option D</p>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>Enterprise</Paper>
          <p className={classes.text}>Option A</p>
          <p className={classes.text}>Option B</p>
          <p className={classes.text}>Option C</p>
          <p className={classes.text}>Option D</p>
        </Grid>
      </Grid>
    </div>
  );
}
