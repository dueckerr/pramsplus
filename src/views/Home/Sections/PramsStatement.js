import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import logo from "assets/img/logo.png";
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
export default function PramsStatement() {
  const classes = useStyles();

  React.useEffect(() => {});
  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h3>MANAGE WHAT YOU MEASURE</h3>
          <p className={classes.text}>
            At PRAMS we believe you should {"''"}Manage what you Measure
            {"''"} not spend your limited time managing your software package.
            This philosophy drives on-going development and ensures that your
            investment results in the maximum return. Easy access to dail and
            historical production data in a consistent and technologcally secure
            manner is what we are all about.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={logo} alt="..." />
        </Grid>
      </Grid>
    </div>
  );
}
