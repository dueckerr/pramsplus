import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";
import LeftPricing from "./Pricing/LeftPricing"
import RightPricing from "./Pricing/RightPricing"

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeStylePricing.js";

const useStyles = makeStyles(styles)

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.blueBlock}>
      <Grid className={classes.blueBlock} container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h3 className={classes.headerTextWhite}>PRAMS Pricing: No Surprises</h3>
          <h3 className={classes.paperPricing}>Starting at $10/well/month</h3>
          <div className={classes.blueBlock}>
              <Grid className={classes.blueBlock} container spacing={3}>
              <small className={classes.lowerHeaderText}>Highlights</small>
              <Grid item xs={6} sm={6} md={6} lg={6}
              className={classes.center}>
                <LeftPricing />
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6}
              className={classes.center}>
                <RightPricing />
              </Grid>
              </Grid>
            </div>
          </Grid>

      <h3 className={classes.lowerHeaderText}>Additional Services: Contact us for pricing and more information</h3>

      <Grid className={classes.blueBlock} container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Business Process Outsourcing</h3>
          <p className={classes.whiteText}>PRAMS can fulfill your monthly allocation and reporting roles. We will review your production at the end of each month and file the appropriate reports to any state. Our goal is to take some of the tedious work off your plate, to allow operators to focus on more vital and revenue-generating work.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Data Migrations</h3>
          <p className={classes.whiteText}>One of the biggest obstacles of implementing a new software platform is migrating old data into the new database. The good news is that so many other company's have grown fed up with their previous software providers and switched to PRAMS that we have imports designed to bring data in the PRAMS platform from every other vendor as well as spreadsheets.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Hosting Option</h3>
          <p className={classes.whiteText}>Server infrastructure and IT support can quickly become an expensive overhead for smaller cap companies. To help combat those expenses, PRAMS offers companies the option to host their data on one of PRAMS proprietary servers. With seamless integration capabilities, we can remove the burden and costs of managing your server and data.</p>
        </Grid>
      </Grid>
      </Grid>
    </div>
  );
}
