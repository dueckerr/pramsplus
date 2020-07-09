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

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Software() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h3 className={classes.headerTextBlue}>The PRAMS Benefit</h3>
      </div>
      <Grid className={classes.paperBenefits} container spacing={3}>

      <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={operations} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Operations </p>
            <p className={classes.blueText}>Easily review daily production data, pressures and other well data to help optimize production</p>
            <p className={classes.blueText}>Equipment monitoring allows users to track operational metrics to help decrese LOE, and reduce unscheduled downtime. </p>
            <p className={classes.blueText}>Create and strore site inspections to streamline compliance requests. </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Regulatory</p>
            <p className={classes.blueText}>Utilizing the daily data, PRAMS seamless State and Federal reporting helps streamline the process, and avoild late reoprting penalites and limit reporting errors</p>
            <p className={classes.blueText}>AVO inspection filing and logging allows oeprators to stay within compliance  </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={marketing} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}> Marketing </p>
            <p className={classes.blueText}>Real-time monitoring of tank capacities allows our clients to accelerate revenue and maximize their potential oil sales.</p>
            <p className={classes.blueText}> Monitoring daily gas flows to avoid imabalance penatlties. </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={moneyJack} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Land</p>
            <p className={classes.blueText}>HBP status can have a serious impact on your assets and operational plan, using PRAMS monitoring well downti9me and watchlist to ensure you are always compliant of the agreement and avoid unnecessary lease terminations. </p>
        </Grid>
     

        <Grid item xs={12} sm={12} md={4} lg={6}>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Reserves </p>
            <p className={classes.blueText}>Import forecasts from any other software, and enjoy a seamless transfer of internal production and operational data to reduce cycle times and reduce costs.</p>
            <p className={classes.blueText}>Combining real-time production data and with the resevres forecast allows operators to focus on the underpreforming wells more quickly. </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Accounting</p>
            <p className={classes.blueText}>Revenue reconcillation from daily field data to monthly purchaser statements can help increase revenue</p>
            <p className={classes.blueText}>Water handling and load ticket management can help users track their invoices and decrease LOE. </p>
            <p className={classes.blueText}>Improved estimates from daily data enables the financial team to report timely and accruate information</p>
        </Grid>
      </Grid>
    </div>
  );
}