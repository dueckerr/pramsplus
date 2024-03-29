import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsBlueBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import pic from "assets/img/monthlyProduction.jpeg";

const useStyles = makeStyles(styles);


export default function ProductionAccounting() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
      <Grid item xs={12} sm={12} md={7}>
          <small className={classes.socials}>Production Accounting</small>
            <p className={classes.text}>PRAMS is the most versatile upstream production accounting and reporting tool available for the small to mid-tier Oil & Gas Operator. The ability to easily and accurately deliver timely internal, partner, and regulatory reports is a must for any operator. PRAMS was designed with the flexibility to interface with endless 3rd party software packages. This creates a software synergy that streamlines data reporting and compels efficiency. PRAMS allows the user to efficiently review and finalize monthly production and then provide that information internally and externally. When you are ready to submit your agency reports all it takes is a few clicks of the mouse to generate both the official printed copies and EDI files for upload to the agencies.</p>
            <div className={classes.block}>
              <Grid className={classes.block} container spacing={3}>
                 <small className={classes.socials}>Features</small>
                  <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>Company web portal</li>
                    <li> Partner web reporting </li>
                    <li> Purchase statement imports</li>    
                    <li> Operated and Non-operated </li>
                    <li> Fully integrated regulatory agency reporting </li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li> Multi-tiered allocations </li>
                    <li> Water disposition tracking </li>
                    <li> Seamless 3rd Party Software Integration </li>
                    <li> Reconcile Monthly purchase statements to daily sales </li>
                  </ul>
                </Grid>
              </Grid>
            </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img src={pic} alt="..." className={classes.image} />
          </Grid>
      </Grid>
    </div>
  );
}
