import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsWhiteBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import pushReport from "assets/img/outsourcing.jpeg";

const useStyles = makeStyles(styles);


export default function Outsourcing() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={12}>
            <small className={classes.socials}>Business Process Outsourcing</small>
                  <p className={classes.text}>
                  Using the PRAMS platform, we can perform and monitor your entire production accounting workflow from Field to Office to Agency.  Our knowledge of the software and the regulatory reporting, immediately accrues to the client.  
                  </p>
                  </Grid>
                   <div className={classes.block}>
                    <Grid className={classes.block} container spacing={3}>
                      <Grid item xs={12} sm={12} md={6} lg={5}>
                        <img src={pushReport} alt="..." className={classes.image} />
                        </Grid>
                <Grid item xs={12} sm={12} md={6} lg={7}>
                 <small className={classes.socials}>Features</small>
                 <Grid className={classes.block} container spacing={3}>
                  <Grid item xs={12} sm={12} md={6} lg={6}>

                  <ul className={classes.featuresText}>
                    <li>Predictable budgeting costs</li>
                    <li>Increased quality of results</li>
                    <li>Lower costs for IT</li>
                    <li>Freedom to focus on strategic activities</li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>Reduced headcount</li>
                    <li>Access to highly skilled back-office staff</li>
                    <li>Improved efficiency</li>
                    <li>Improved profitability</li>
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