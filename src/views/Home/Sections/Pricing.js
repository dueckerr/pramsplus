import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";

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
    fontSize: "18px",
  },
}));

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h2>PRAMS Pricing</h2>
        <h3>We believe in customizing our services to fit our your needs.</h3>
      </div>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper}>Price Per Well: Starting at $10 per well</Paper>
          <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa. Odio tempor orci dapibus ultrices in iaculis nunc sed. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio ut enim blandit volutpat maecenas volutpat. Viverra aliquet eget sit amet tellus cras adipiscing enim.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper}>Hosting Option: Starting at $1 per well</Paper>
          <p className={classes.text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa. Odio tempor orci dapibus ultrices in iaculis nunc sed. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio ut enim blandit volutpat maecenas volutpat. Viverra aliquet eget sit amet tellus cras adipiscing enim.
          </p>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper}>Outsourcing: Starting at $10 per well</Paper>
          <p className={classes.text}>PRAMS can fulfill 
            your monthly allocation and reporting roles.
            As companies, especially smaller operators, look to better manage their operating costs, some of our clients have opted to outsource their reporting to PRAMS.  We will review your production at the end of each month and file the appropriate reports to any state and complete the allocation process.  Our goal is to take some of the tedious work off you plate, to allow operators to focus on more vital and revenue generating work. </p>

        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3}>
          <Paper className={classes.paper}>User Fee: None</Paper>
          <p className={classes.text}>Unlike other production accounting software providers, we do not charge on a per user basis.  This removes the hassle of managing multiple users trying to use the same platform.  It's your data, and you should be able to access it whenever, regardless who else is on our platform</p>
        </Grid>
      </Grid>
    </div>
  );
}
