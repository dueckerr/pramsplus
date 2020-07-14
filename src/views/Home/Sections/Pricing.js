import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Tab from "@material-ui/core/Tab";

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeStylePricing.js";

const useStyles = makeStyles(styles)

export default function Pricing() {
  const classes = useStyles();

  return (
    <div className={classes.blueBlock}>

      <div>
        <h3 className={classes.headerTextWhite}>PRAMS Pricing</h3>
        <h3 className={classes.lowerHeaderText}>We believe in customizing our services to fit your needs.</h3>
      </div>

      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h3 className={classes.paperPricing}>Price Per Well: $10/well per month</h3>
        </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <h3 className={classes.lowerHeaderText}> Overview</h3>
              <hr></hr>
              <p className={classes.whiteText}>PRAMS intent is to price our services at a disruptive rate.</p>
              <p className={classes.whiteText}>We earn your business every month, with no year-long contracts.</p>
              <p className={classes.whiteText}>You will have access to the full PRAMS suite: PumperX2, AnalystX2, InsightX2, and our PRAMS Portal.</p>
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6}>
                <h3 className={classes.lowerHeaderText}> What's Included</h3>
                <hr></hr>
                <ul className={classes.whiteTextBulletPoints}>
                  <li>Complete access to the PRAMS Platform</li>
                  <li>No Yearly Renewal Fees</li>
                  <li>Unlimited Users</li>
                  <li>Free Call Support</li>
                  <li>Personalized Queries</li>
                  <li>What else can we add??</li>
                </ul> 
             </Grid>
      </Grid>

      <h3 className={classes.lowerHeaderText}>Additional Services: Contact us for pricing and more information</h3>

      <Grid className={classes.block} container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Business Process Outsourcing</h3>
          <p className={classes.whiteText}>PRAMS can fulfill your monthly allocation and reporting roles. We will review your production at the end of each month and file the appropriate reports to any state and complete the allocation process. Our goal is to take some of the tedious work off your plate, to allow operators to focus on more vital and revenue-generating work.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Data Migrations</h3>
          <p className={classes.whiteText}>One of the biggest obstacles of implementing a new software platform is migrating old data into the new database. The good news is that so many other company's have grown feed up with their previous software providers and switched to PRAMS that we have imports designed to bring data in the PRAMS platform from nearly every other provider.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Hosting Option</h3>
          <p className={classes.whiteText}>Server infrastructure and IT support can quickly become an expensive overhead for smaller cap companies. To help combat those expenses, PRAMS offers companies the option to host their data on one of PRAMS proprietary servers. With seamless integration capabilities, we can remove the burden and costs of managing your server and data.</p>
        </Grid>
      </Grid>
    </div>
  );
}
