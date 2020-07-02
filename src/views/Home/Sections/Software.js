import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import classNames from "classnames";
import assetMgmt from "assets/img/assetMgmt.jpeg";
import fieldDataCapture from "assets/img/fieldDataCapture.jpeg";
import datacharts2 from "assets/img/datacharts2.png"
// core components
import Grid from "@material-ui/core/Grid";

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeBlueBack.js";

const useStyles = makeStyles(styles);

export default function Software() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h3 className={classes.headerTextBlue}>The PRAMS Benefit</h3>
      </div>
      <Grid className={classes.paper} container spacing={3}>

        <Grid item xs={12} sm={12} md={6} lg={6}>
        <p className={classes.lowerHeaderText}>Operations </p>
        <p className={classes.blueText}>The most vital part of a Production Accounting software is the data entry process.  It must be intuitive and easily understandable as users enter the data. Over the past 15 years PRAMS has refined this process and has created the perfect gauge-sheet style interface data entry proceess.</p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
        <p className={classes.lowerHeaderText}>Regulatory </p>
        <p className={classes.blueText}>The most vital part of a Production Accounting software is the data entry process.  It must be intuitive and easily understandable as users enter the data. Over the past 15 years PRAMS has refined this process and has created the perfect gauge-sheet style interface data entry proceess.</p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
        <p className={classes.lowerHeaderText}>Marketing </p>
        <p className={classes.blueText}>The most vital part of a Production Accounting software is the data entry process.  It must be intuitive and easily understandable as users enter the data. Over the past 15 years PRAMS has refined this process and has created the perfect gauge-sheet style interface data entry proceess.</p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p className={classes.lowerHeaderText}>Land </p>
          <p className={classes.blueText}>img </p>
        </Grid>
     

        <Grid item xs={12} sm={12} md={4} lg={6}>
          <p className={classes.lowerHeaderText}>Reserves </p>
          <p className={classes.blueText}>img </p>
        </Grid>

        <Grid item xs={12} sm={12} md={4} lg={6}>
          <p className={classes.lowerHeaderText}>Accounting </p>
          <p className={classes.blueText}>img </p>
        </Grid>
      </Grid>
    </div>
  );
}