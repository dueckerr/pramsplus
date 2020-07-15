import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsBlueBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import pic from "assets/img/fieldDataCapture.jpg";

const useStyles = makeStyles(styles);


export default function ProductionAccounting() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <small className={classes.socials}>Monthly Production Accounting & Reporting</small>
            <p className={classes.text}>PramsX2 is the most versatile upstream production accounting and reporting tool available in the oil and gas industry today. The ability to easily and accurately deliver timely internal, partner, and regulatory reports is a must for any operator. PramsX2 was designed with the flexibility to interface with endless 3rd party software packages (BOLO Systems, Excalibur, Ares, Wolfpack, OGsys, etc). This creates a software synergy that streamlines data reporting and compels efficiency. AnalystX2 allows the user to efficiently review and finalize monthly production and then provide that information internally and externally. When you are ready to submit your agency reports all it takes is a few clicks of the mouse to generate both the official printed copies and EDI files for upload to the agencies.</p>
            <div className={classes.block}>
              <Grid className={classes.block} container spacing={3}>
              <small className={classes.socials}>Features</small>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li>Data-Entry Validation & Production Data Allocation</li>
                    <li> Internal/External Compliance Configuration </li>
                    <li> Multilayered Production Forecasting </li>
                    <li> Equipment Use Analytics </li>
                  </ul>
                </Grid>
                <Grid item xs={12} sm={12} md={6} lg={6}>
                  <ul className={classes.featuresText}>
                    <li> Enhanced Oil Ticket Entry with API60 Calculations </li>
                    <li> Built-in Monthly Gas Statement Import Processes </li>
                    <li> Monthly Correction Input Capabilities </li>
                    <li> Seamless 3rd Party Software Integration </li>
                  </ul> 
                </Grid>
              </Grid>
            </div>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <img src={pic} alt="..." className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}
