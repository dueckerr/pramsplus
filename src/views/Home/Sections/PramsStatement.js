import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import connectedOilField from "assets/img/connectedOilField.jpeg";
import Grid from "@material-ui/core/Grid";
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeStyle.js";

const useStyles = makeStyles(styles)

export default function PramsStatement() {
  const classes = useStyles();

  React.useEffect(() => {});
  return (
    <div className={classes.blueBlock}>
      <h3 className={classes.headerTextWhite}> Innovative Oil & Gas Production Software</h3>
        <Grid className={classes.block} container spacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <h3 className={classes.lowerHeaderText}>Complete Field Solution </h3>
              <p className={classes.whiteText}>
              Built through years of continuous development, PRAMS is a complete field solution created with the most dynamic gauge-sheet style data capture tool. Unlike our competitors, we feature color-cut tanks, site inspections, unlimited meters, and equipment metrics - all at the pumpers fingertips.              </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <h3 className={classes.lowerHeaderText}>Powerful Analytic Capabilities</h3>
              <p className={classes.whiteText}>
              At PRAMS we understand that just capturing the data isn't enough. Too often important data and trends are overlooked, having this information transformed into meaningful visualization tools and concise reports helps you gain insight into your assets and maximize your ROI, that is the PRAMS way.
              </p>
          </Grid>
          <Grid item xs={12} sm={12} md={12} lg={4}>
            <h3 className={classes.lowerHeaderText}>Asset Management & Integrations </h3>
              <p className={classes.whiteText}>
              Today, every well and battery are installed with countless meters and sensors, it is becoming increasingly difficult to manage everything efficiently. The PRAMS platform enables both digital data and pumper captured data to come together into a single platform.  A single platform from which all departments can rely upon for accurate information.  Integrations with other departmental workflows become seamless.
              </p>
          </Grid>
        </Grid>
    </div>
  );
}
