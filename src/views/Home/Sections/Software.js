  
import React, { useContext, useEffect, useState } from 'react'
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";

import operations from "assets/img/operations.jpg"
import marketing from "assets/img/marketing.jpg"
import regulatory from "assets/img/regulatory.jpg"
import moneyJack from "assets/img/moneyJack.jpg"
import Land from "./Benefits/Land"
import Benefits from "./Benefits/Benefits"
import Marketing from "./Benefits/Marketing"
import Operations from "./Benefits/Operations"
import Accounting from "./Benefits/Accounting"
import Reserves from "./Benefits/Reserves"
import Regulatory from "./Benefits/Regulatory"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";
import { setTextRange } from 'typescript';
import { func } from 'prop-types';

const useStyles = makeStyles(styles);

export default function Software() {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState([]);

  function handlePopoverOpenLand(event){
    setAnchorEl(event.currentTarget);
    setText(landText);
  };

  useEffect(() => {
    setText("PRAMS");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search,])

  function handlePopoverCloseLand(){
    setAnchorEl(null);
    setText("PRAMS");
  };


  const landText = [
     "Well downtime monitoring avoids unnecessary lease terminations for leases past the primary term.",
  ]

  const accountingText = [
   "Reconcile monthly purchaser statements to daily field data for both oil and gas.  Never miss getting paid on a crude oil haul again.",
   "Comparison of water hauling invoices to daily field data improves approval integrity.",
  "Daily field data enables the financial team to develop more accurate and timely accruals."
  ]
  const operationsText = [
     "Easily review daily production volumes, pressures and other well data to optimize production.",
     "Track equipment operational metrics reducing unscheduled downtime and lease operating expenses.",
     "Manage tank capacities improving timing of water hauls and crude sales."
  ]
  const reservesText = [
     "Simplifying transfer of daily and monthly production volumes, pressures and operational data to the reserve engineering package provides more time for evaluating forecasts when timing is compressed.",
    "Combining real-time production data and with the reserves forecast allows operators to focus on the underperforming wells quicker."
  ]
  const regulatoryText = [
     "Seamless State and Federal reporting reduces reporting errors and non-compliance notices",
    "Log and store inspections (APCE, Facility, AVO, etc) for timely response to compliance requests"
  ]
  const marketingText = [
     "Daily management of tank capacities enables timing of crude sales.",
    "Monitor daily gas flows to avoid imbalance penalties."
  ]

  function handlePopoverOpenOperations(event){
    setAnchorEl(event.currentTarget);
    setText([operationsText]);
  };

  function handlePopoverCloseOperations(){
    setAnchorEl(null);
    setText("PRAMS")
  };

  function handlePopoverOpenMarketing(event){
    setAnchorEl(event.currentTarget);
    setText(marketingText)
  };

  function handlePopoverCloseMarketing(){
    setAnchorEl(null);
    setText("PRAMS")
  };

  function handlePopoverOpenAccounting (event) {
    setAnchorEl(event.currentTarget);
    setText(accountingText)
  };

  function handlePopoverCloseAccounting(){
    setAnchorEl(null);
    setText("PRAMS")
  };

  function handlePopoverOpenReserves(event) {
    setAnchorEl(event.currentTarget);
    setText(reservesText)
  };

  function handlePopoverCloseReserves(){
    setAnchorEl(null);
    setText("PRAMS")

  };

  function handlePopoverOpenReg(event){
    setAnchorEl(event.currentTarget);
    setText(regulatoryText)

  };

  function handlePopoverCloseReg(){
    setAnchorEl(null);
    setText("PRAMS")
  }

  return (
    <Card className={classes.block}>
      <Typography className={classes.headerTextBlue}>PRAMS benfits the entire organization</Typography>
      <br></br>

      <Grid container spacing={10}>
        <Grid item xs={12} sm={6}>
          <Card className={classes.blueCircleLeft}>
            <Typography
              onMouseEnter={handlePopoverOpenLand}
              onMouseLeave={handlePopoverCloseLand}
            >
              <Land> </Land>
            </Typography>
          </Card>
        </Grid>

    <Grid item xs={12} sm={6}>
      <Card className={classes.blueCircleRight}>
        <Typography
          onMouseEnter={handlePopoverOpenOperations}
          onMouseLeave={handlePopoverCloseOperations}
        >
          <Operations component="div" />
        </Typography>
      </Card>        
    </Grid>  

        <Grid item xs={12} md={4}>
          <Card className={classes.blueCircleLeft}>
            <Typography
              onMouseEnter={handlePopoverOpenReserves}
              onMouseLeave={handlePopoverCloseReserves}
            >
              <Reserves />
            </Typography>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card className={classes.textBlock}>
            <CardContent className={classes.whiteText}>
              {text}
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card className={classes.blueCircleRight}>
            <Typography
              onMouseEnter={handlePopoverOpenAccounting}
              onMouseLeave={handlePopoverCloseAccounting}
            >
              <Accounting />  
            </Typography>
          </Card>
        </Grid>    

        <Grid item xs={12} sm={6}>
          <Card className={classes.blueCircleLeft}>
            <Typography
              onMouseEnter={handlePopoverOpenReg}
              onMouseLeave={handlePopoverCloseReg}
            >
              <Regulatory />
            </Typography>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Card className={classes.blueCircleRight}>
            <Typography
              onMouseEnter={handlePopoverOpenMarketing}
              onMouseLeave={handlePopoverCloseMarketing}
            >
              <Marketing />
            </Typography>
          </Card>
        </Grid> 
      </Grid>        
    </Card>
  );
}

