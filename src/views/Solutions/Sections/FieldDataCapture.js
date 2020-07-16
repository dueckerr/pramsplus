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
        <Grid item xs={12} sm={12} md={12}>
          <small className={classes.socials}>Field Data Caputre</small>
            <p className={classes.text}>With the countless ways operators can capture and record production data, the organization needs to implement a recording process that best fits the operating environment. This is how PumperX2 was designed. It allows for data to be recorded in the field, office or imported from SCADA systems. Consistent and accurate daily information is the foundation for precise monthly reconciliation allocation and reporting. Once-daily information is recorded it is utilized throughout all aspects of PramsX2, eliminating the need for repetitive data entry. Using our Template Manager in AnalystX2, users can customize exactly what they want to capture for each well, as well as in the order that is best suited for each pumper.</p>
        </Grid>

            <div className={classes.block}>
              <Grid className={classes.block} container spacing={3}>
                <Grid item xs={12} sm={12} md={6} lg={5}>
                  <img src={dataCharts} alt="..." className={classes.image} />
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                 <small className={classes.socials}>Features</small>
                 <Grid className={classes.block} container spacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>

                  <ul className={classes.featuresText}>
                    <li>Flexible Gas Volume Data Entry</li>
                    <li>Multi-tiered Daily Data Allocation</li>
                    <li>Downtime Production Accounting</li>
                    <li>Pressure Recording (casing, tubing, Bradenhead)</li>
                    <li>Route-Based Data Entry</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>3rd Party & SCADA Import</li>
                    <li>Corrected Run Ticket Entry</li>
                    <li>Built-in Audio, Visual, Olfactory (AVO) Inspection</li>
                    <li>Customizable facility and APCE inspections</li>
                    <li>Customizable layouts for every well</li>
                  </ul>
                  </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </div>
        </Grid>
    </div>
  );
}
