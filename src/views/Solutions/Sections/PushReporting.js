import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsWhiteBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import pushReport from "assets/img/pushReport.png";

const useStyles = makeStyles(styles);


export default function PushReporting() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
          <small className={classes.socials}>Automated Push Reporting</small>
            <p className={classes.text}>Sharing production and operational data internally and with outside partners with automated reporting that is sent via email is easy with PramsX2. This client-driven aspect of PramsX2 consistently and automatically distributes necessary production data to any email address hourly, daily, weekly, monthly, or at a customized time-interval. Analysts and operators no longer need to remember which data report to share internally or with partnered stakeholders, nor do they need to remember when to share it. By eliminating tedious and repetitive reporting, PramsX2 increases operational efficiency by providing the capability to automate countless reporting tasks simultaneously.</p>
        </Grid>
              <div className={classes.block}>
                <Grid className={classes.block} container spacing={3}>
                <Grid item xs={12} sm={12} md={5}>
                  <img src={pushReport} alt="..." className={classes.imagePush} />
                  </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                 <small className={classes.socials}>Features</small>
                 <Grid className={classes.block} container spacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>

                  <ul className={classes.featuresText}>
                    <li>Define specific well lists for partner reporting</li>
                    <li>All reports available in both XLSX and PDF format</li>
                    <li>Pinpoint, Extract, and Export Volume Data Automatically</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>Customizable Report Scheduling</li>
                    <li>Automated E-mail Reporting</li>
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