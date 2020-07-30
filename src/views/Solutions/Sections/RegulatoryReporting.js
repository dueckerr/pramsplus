import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import styles from "assets/jss/material-kit-react/views/solutionsBlueBack";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import logo from "assets/img/regulatoryCompliance.jpg";

const useStyles = makeStyles(styles);


export default function RegulatoryReporting() {
  const classes = useStyles();
  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={7}>
          <small className={classes.socials}> Agency Regulatory Reporting</small>
            <p className={classes.text}>Over the years our clients have consistently requested a friendly and accurate regulatory reporting interface—a request that is brilliantly delivered within PRAMS. The regulatory reporting setup is swift, and our software development team constantly monitors agencies for regulatory changes and implements timely updates at no additional cost.  We are committed to developing the reports our Operators need.  Don’t see a State or Agency let us know.</p>
            <div className={classes.block}>
              <Grid className={classes.block} container spacing={3}>
              <small className={classes.socials}>Reports Included</small>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>ONRR (OGOR)</li>
                    <li>Colorado</li>
                    <li>Louisiana</li>
                    <li>Michigan</li>
                  </ul>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>Montana</li>
                    <li>Nebraska</li>
                    <li>New Mexico</li>
                    <li>North Dakota</li>
                  </ul>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>South Dakota</li>
                    <li>Texas</li>
                    <li>Utah</li>
                    <li>Wyoming Dakota</li>
                  </ul>
                </Grid>
                <Grid item xs={6} sm={6} md={3} lg={3}>
                  <ul className={classes.featuresText}>
                    <li>Mississippi</li>
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
