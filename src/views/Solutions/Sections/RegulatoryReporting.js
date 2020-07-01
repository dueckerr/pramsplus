import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsBlueBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import logo from "assets/img/logo.png";

const useStyles = makeStyles(styles);


export default function RegulatoryReporting() {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid xs={12} sm={12} md={7}>
          <h3>
            <small className={classes.socials}>
              Production & Regulatory Reporting
            </small>
          </h3>
          <CustomTabs
            xs={12}
            sm={12}
            md={4}
            plainTabs
            className={classes.text}
            tabs={[
              {
                tabName: "Overview",
                tabContent: (
                  <p className={classes.text}>
                    Unique and complex regulatory requirements hinder production reporting for every operator. Over the years our clients have consistently requested a friendly and accurate regulatory reporting interface—a request that is brilliantly delivered within the PramsX2 suite. Regulatory reporting setup is swift, and our software development team constantly monitors agencies for regulatory changes and implements timely updates at no additional cost.
                    Committed to developing a complete end-to-end solution for any oil and gas operator, at PRAMS we have developed regulatory reporting for eleven agencies and continue to expand our capabilities with five additional agency reports being developed.
                  </p>
                ),
              },
              {
                tabName: "Features",
                tabContent: (
                  <div className={classes.block}>
                    <Grid className={classes.block} container spacing={3}>
                      <Grid tem xs={12} sm={12} md={6} lg={6}>
                        <ul className={classes.featuresText}>
                          <li>Automatic Volume Calculations</li>
                          <li>Flexible Gas Volume Data Entry</li>
                          <li>Corrected Run Ticket Entry</li>
                          <li>Multi-tiered Daily Data Allocation</li>
                          <li>Downtime Production Accounting</li>
                          <li>Pressure Recording (casing, tubing, Bradenhead)</li>
                          <li>Route-Based Data Entry</li>
                        </ul>
                      </Grid>
                      <Grid tem xs={12} sm={12} md={6} lg={6}>
                        <ul className={classes.featuresText}>
                          <li>Remote “Offline” Laptop Data Entry</li>
                          <li>3rd Party Import Capabilities—SCADA systems included</li>
                          <li>Ability to Capture/Calculate Oil/Water Gauges (color cut)</li>
                          <li>Capture equipement information</li>
                          <li>Built in AVO Inspection</li>
                          <li>Customizable facility and APCE inspections</li>
                          <li>Customizable layouts for every well</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                ),
              },
            ]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <img src={logo} alt="..." className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}
