import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsWhiteBack";
// core components
import classNames from "classnames";

import Grid from "@material-ui/core/Grid";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import dataCharts from "assets/img/fieldDataCapture.jpeg";
// import dataChart from "assets/img/";

const useStyles = makeStyles(styles);


export default function FieldDataCapture() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={5}>
          <img src={dataCharts} alt="..." className={classes.image} />
        </Grid>
        <Grid xs={12} sm={12} md={7}>
            <small className={classes.socials}>Field Data Caputre</small>
          <p className={classes.text}>Oil and Gas operators capture and record production data in various ways. At PRAMS we understand that it is important for organizations to implement a recording process that best fits the operating environment. This is why PumperX2 allows for data to be recorded in the field, home office, or imported from SCADA systems. Consistent and accurate daily information is the foundation for precise monthly reconciliation and true-up. Once daily information is recorded it is utilized throughout all aspects of PramsX2, completely eliminating the need for repetitive data entry. Using our Template Manager in AnalystX2 you have the ability to customize exactly what you want to capture for each well in the order that is best suited for each pumper.</p>
            <div className={classes.block}>
              <Grid className={classes.block} container spacing={3}>
              <small className={classes.socials}>Features</small>
                <Grid tem xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>Flexible Gas Volume Data Entry</li>
                    <li>Multi-tiered Daily Data Allocation</li>
                    <li>Downtime Production Accounting</li>
                    <li>Pressure Recording (casing, tubing, Bradenhead)</li>
                    <li>Route-Based Data Entry</li>
                  </ul>
                </Grid>
                <Grid tem xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>3rd Party & SCADA Import</li>
                    <li>Corrected Run Ticket Entry</li>
                    <li>Built in AVO Inspection</li>
                    <li>Customizable facility and APCE inspections</li>
                    <li>Customizable layouts for every well</li>
                  </ul>
                </Grid>
              </Grid>
            </div>
        </Grid>
      </Grid>
    </div>
  );
}
