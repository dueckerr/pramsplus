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
      {/* <div className={classes.title}>
        <h3 className={classes.headerTextBlue}>PRAMS benefits the entire organization
</h3>
      </div>
      <Grid className={classes.paperBenefits} container spacing={3}>

      <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={operations} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Operations </p>
            <p className={classes.blueText}>
            Easily review daily production volumes, pressures and other well data to optimize production.
            </p>
            <p className={classes.blueText}>
            Track equipment operational metrics reducing unscheduled downtime and lease operating expenses.
            </p>
            <p className={classes.blueText}>
            Manage tank capacities improving timing of water hauls and crude sales.
            </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Regulatory</p>
            <p className={classes.blueText}>
            Seamless State and Federal reporting reduces reporting errors and non-compliance notices.
            </p>
            <p className={classes.blueText}>
            Log and store inspections (APCE, Facility, AVO, etc) for timely response to compliance requests.
            </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={marketing} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}> Marketing </p>
            <p className={classes.blueText}>
            Daily management of tank capacities enables timing of crude sales.
            </p>
            <p className={classes.blueText}>
            Monitor daily gas flows to avoid imbalance penalties.
            </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={moneyJack} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Land</p>
            <p className={classes.blueText}>
            Well downtime monitoring avoids unnecessary lease terminations for leases past the primary term.
            </p>
        </Grid>
     

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Reserves </p>
            <p className={classes.blueText}>
            Simplifying transfer of daily and monthly production volumes, pressures and operational data to the reserve engineering package provides more time for evaluating forecasts when timing is compressed.
            </p>
            <p className={classes.blueText}>
            Combining real-time production data and with the reserves forecast allows operators to focus on the underperforming wells quicker.
            </p>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Accounting</p>
            <p className={classes.blueText}>
            Reconcile monthly purchaser statements to daily field data for both oil and gas.  Never miss getting paid on a crude oil haul again.
            </p>
            <p className={classes.blueText}>
            Comparison of water hauling invoices to daily field data improves approval integrity.
            </p>
            <p className={classes.blueText}>
            Daily field data enables the financial team to develop more accurate and timely accruals.
            </p>
        </Grid>
      </Grid> 
      <hr>
      </hr> */}
      <Grid className={classes.paperBenefits} container spacing={3}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Land />
          <Operations />
        </Grid>        
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Reserves item xs={12} sm={12} md={4} lg={4}/>
          <Benefits item xs={12} sm={12} md={4} lg={4}/>
          <Accounting item xs={12} sm={12} md={4} lg={4}/>
        </Grid>        
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Regulatory item xs={12} sm={12} md={6} lg={6}/>
          <Marketing item xs={12} sm={12} md={6} lg={6}/>
        </Grid>        
      </Grid>
    </div>
  );
}