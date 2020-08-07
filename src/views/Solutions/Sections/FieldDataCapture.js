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
          <small className={classes.socials}>Field Data Capture</small>
            <p className={classes.text}>With the countless ways operators can capture and record production data, the organization needs to implement a recording process that best fits their operating environment and culture. PRAMS was designed with this in mind. Users customize exactly what they want to capture for each well, as well as in the order that is best suited for each route/pumper.  Daily field data is entered in the field, the office or imported from SCADA and 3rd party systems. Consistent and accurate daily information is the foundation for optimizing production.</p>
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
                    <li>Route-Based Data Entry</li>
                    <li>User-defined layouts for every well</li>
                    <li>Equipment tracking – User configured</li>
                    <li>Numerous Gas meter types</li>
                    <li>Downtime tracking</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>3rd Party & SCADA Import</li>
                    <li>Pressures (casing, tubing, bradenhead, line)</li>
                    <li>API Corrected Run Ticket Entry</li>
                    <li>Multi-tiered Daily Data Allocation</li>
                    <li>Facility, AVO and APCE inspections – User defined</li>
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
