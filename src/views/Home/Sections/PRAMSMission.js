import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

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
    color: "black",
    textAlign: "center",
    border: 0,
    borderRadius: 3,
  },
}));

export default function PRAMSMission() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h2>20 Years of Proven Success</h2>
      </div>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>+1 Million BOE Allocated</Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>Over 100,000 Wells Manged</Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            1,000{"'"}s Regulatory Reports Filed
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
