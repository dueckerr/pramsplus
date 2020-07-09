import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import logo from "assets/img/logo.png";
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeMission.js";

const useStyles = makeStyles(styles)

export default function PRAMSMission() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <h3 className={classes.headerTextBlue}>The PRAMS Way</h3> 
      <Grid className={classes.block} container spacing={2}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
        <img src={logo} alt="..." className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <p className={classes.blueText}>
          PramsX2 is an end-to-end oil and gas production management software designed to conquer the complex data-management challenges facing today’s oil and gas operators. The ability to rapidly and accurately capture, analyze, and manage production data is vital to the success of every oil and gas operator. At PRAMS we empower our clients with the ability to swiftly capture, analyze, and distribute information with confidence and consistency.
          </p>
          <p className={classes.blueText}>
          Operators frequently overlook product-management efficiency and revert to unorganized and time-consuming spreadsheets, a factor that too often erodes the operator’s profitability. By simplifying field data capture through single-point data entry, we equip pumpers, engineers, analysts, and operators with the ability to effectively manage what they measure.
          </p>
          <p className={classes.blueText}>
          The use of an integrated production system simplifies data acquisition and allows everyone in the organization to utilize the production information they need to do their jobs. Anyone can easily see, review and export daily and historical production data using flexible and customizable processes.
          </p>
        </Grid>
      </Grid>
    </div>
  );
}
