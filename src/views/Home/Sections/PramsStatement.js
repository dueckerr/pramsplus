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
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <h3 className={classes.lowerHeaderText}>Complete Field Solution </h3>
              <p className={classes.whiteText}>
                PRAMS is a complete field solution, built through years of continuous development, PRAMS has created the most sophisticated gauge-sheet style data capturing platform. Color-cut tanks, site inspection, and unlimited meters all at the pumpers finger tips, are just a few features that vaults PRAMS past our competitors.
              </p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <h3 className={classes.lowerHeaderText}>Unmatched Analytic Capabilities</h3>
              <p className={classes.whiteText}>
                At PRAMS we understand that just capturing the data isn't enough.  Too often does important data and trends become distorted, having this information transformed into meaningful visualization tools that will help you gain insight into your assets and maximize your ROI, that is the PRAMS way.
              </p>
          </Grid>
          <Grid item xs={12} sm={12} md={8} lg={4}>
            <h3 className={classes.lowerHeaderText}>Asset Management & Integrations </h3>
              <p className={classes.whiteText}>
              Today, every well and battery are installed with countless meters and sensors, it is becoming increasingly difficult to manage everything efficiently.  The PRAMS platform allows users to freely dynamically export all of your data, enabling our clients to customize how they choose to see their data, and effortlessly integrate with other software services.</p>
          </Grid>
        </Grid>
    </div>
  );
}
