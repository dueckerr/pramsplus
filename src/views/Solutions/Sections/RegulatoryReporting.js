import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsBlueBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import logo from "assets/img/regReporting.jpeg";

const useStyles = makeStyles(styles);


export default function RegulatoryReporting() {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid xs={12} sm={12} md={7}>
          <small className={classes.socials}>Production & Regulatory Reporting</small>
            <p className={classes.text}> Unique and complex regulatory requirements hinder production reporting for every operator. Over the years our clients have consistently requested a friendly and accurate regulatory reporting interface—a request that is brilliantly delivered within the PramsX2 suite. Regulatory reporting setup is swift, and our software development team constantly monitors agencies for regulatory changes and implements timely updates at no additional cost.</p>
            <div className={classes.block}>
              <Grid className={classes.block} container spacing={3}>
              <small className={classes.socials}>Reports Inlcuded</small>
                <Grid tem xs={12} sm={12} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>OGOR & ONRR</li>
                    <li>BLM Seal Reports</li>
                    <li>Arizona</li>
                    <li>Arkansas</li>
                  </ul>
                </Grid>
                <Grid tem xs={12} sm={12} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>Colorado</li>
                    <li>Montana</li>
                    <li>North Dakota</li>
                    <li>Louisiana</li>
                  </ul>
                </Grid>
                <Grid tem xs={12} sm={12} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>Arkansas</li>
                    <li>Texas</li>
                    <li>Kansas</li>
                    <li>South Dakota</li>
                  </ul>
                </Grid>
                <Grid tem xs={12} sm={12} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>Missippi</li>
                    <li>North Dakota</li>
                    <li>Utah</li>
                    <li>New Mexico</li>
                  </ul>
                </Grid>
              </Grid>
            </div>
        </Grid>
        <Grid item xs={12} sm={12} md={5} lg={5}>
          <img src={logo} alt="..." className={classes.image} />
        </Grid>
      </Grid>
    </div>
  );
}
