import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "assets/img/logo.png";

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
  text: {
    color: "black",
    textAlign: "center",
    border: 0,
    borderRadius: 3,
    fontSize: "18px",
  },
}));

export default function PRAMSMission() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <img src={logo} alt="..." />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <p className={classes.text}>
          PramsX2 is an end-to-end oil and gas production management software designed to conquer the complex data-management challenges facing today’s oil and gas operators. The ability to rapidly and accurately capture, analyze, and manage production data is vital to the success of every oil and gas operator. At PRAMS we empower our clients with the ability to swiftly capture, analyze, and distribute information with confidence and consistency.
          </p>
          <p className={classes.text}>
          Operators frequently overlook product-management efficiency and revert to unorganized and time-consuming spreadsheets, a factor that too often erodes the operator’s profitability. By simplifying field data capture through single-point data entry, we equip pumpers, engineers, analysts, and operators with the ability to effectively manage what they measure.
          </p>
          <p className={classes.text}>
          The use of an integrated production system simplifies data acquisition and allows everyone in the organization to utilize the production information they need to do their jobs. Anyone can easily see, review and export daily and historical production data using flexible and customizable processes.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
