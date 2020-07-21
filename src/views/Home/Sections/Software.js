import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import classNames from "classnames";
import assetMgmt from "assets/img/assetMgmt.jpeg";
import fieldDataCapture from "assets/img/fieldDataCapture.jpeg";
import marketing from "assets/img/marketing.jpg"
import moneyJack from "assets/img/moneyJack.jpg"
import operations from "assets/img/operations.jpg"
import regulatory from "assets/img/regulatory.jpg"
// core components
import Grid from "@material-ui/core/Grid";
import Land from "./Benefits/Land"
import Operations from "./Benefits/Operations"
import Reserves from "./Benefits/Reserves"
import Marketing from "./Benefits/Marketing"
import Benefits from "./Benefits/Benefits"

import Regulatory from "./Benefits/Regulatory";
import Accounting from "./Benefits/Accounting";
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Software() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h3 className={classes.headerTextBlue}>PRAMS benfits the entire organization</h3>
        <br></br>
      </div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Land />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Operations />
        </Grid>  

        <Grid item xs={12} md={4}>
          <Reserves />
        </Grid>

        <Grid item xs={12} md={4}>
          <Benefits />
        </Grid> 

        <Grid item xs={12} md={4}>
          <Accounting />
        </Grid>    

        <Grid item xs={12} sm={6}>
          <Regulatory />
        </Grid>

        <Grid item xs={12} sm={6}>
          <Marketing />
        </Grid> 
      </Grid>        
    </div>
  );
}