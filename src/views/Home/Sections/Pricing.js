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
        <h3 className={classes.lowerHeaderText}> We believe in customizing our services to fit our your needs.</h3>
      </div>

      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <h3 className={classes.paperPricing}>Price Per Well: $10/well per month</h3>
          <p className={classes.whiteText}>The cost of PRAMS starts at $10/well for the first 100 wells. After the first 100 wells we work with our customers and provide a volume discount based on their need aand expected support.  This fee includes the full PRAMS Plus Accounting suite, unlimited users and customer support. </p>
          <p className={classes.whiteText}>We believe in earning your business every month, and have done away with longterm contracts. Eliminating all of the hidden support fees, you will know what you pay each month. </p>
        </Grid>
      </Grid>

      <h3 className={classes.lowerHeaderText}>Additional Services: Contact us for pricing and more information</h3>

      <Grid className={classes.block} container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Business Process Outsourcings</h3>
          <p className={classes.whiteText}>PRAMS can fulfill your monthly allocation and reporting roles. We will review your production at the end of each month and file the appropriate reports to any state and complete the allocation process.  Our goal is to take some of the tedious work off you plate, to allow operators to focus on more vital and revenue generating work. </p>
        </Grid>
        {/* <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Start Up Costs: Contact Us</h3>
          <p className={classes.whiteText}>There is a one time fee for that covers data integration, training and user setup.  </p>
        </Grid> */}
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Data Migrations</h3>
          <p className={classes.whiteText}>One of the biggest opsticals of implementing a new software platform is migrating </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4}>
          <h3 className={classes.paperPricing}>Hosting Option</h3>
          <p className={classes.whiteText}>Server infrastructure and IT support can quickly become an expensive overhead for smaller cap companies.  To help combat those expenses, PRAMS offers companies the option to host their data on one of PRAMS propirtary servers.  With seemless integration capabilites, we can remove the burden and costs of managing your own server and data.</p>
        </Grid>
      </Grid>
    </div>
  );
}
