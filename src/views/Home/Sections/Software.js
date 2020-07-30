  
import React, { useContext, useEffect, useState } from 'react'
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import {useImage} from 'react-image'

import Land from "./Benefits/Land"
import Benefits from "./Benefits/Benefits"
import Marketing from "./Benefits/Marketing"
import Operations from "./Benefits/Operations"
import Accounting from "./Benefits/Accounting"
import Reserves from "./Benefits/Reserves"
import Regulatory from "./Benefits/Regulatory"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";
import pic from "assets/img/marketing2.png"

const useStyles = makeStyles(styles);

export default function Software() {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState();

  let pic = require("assets/img/marketing2.png");

  function handlePopoverOpenLand(event){
    setAnchorEl(event.currentTarget);
    setText(landText);
  };

  useEffect(() => {
    setText(pic);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search,])

  function handlePopoverCloseLand(){
    setAnchorEl(null);
    setText(Prams);
  };
  
  const Prams = (pic)

  const landText = "- Well downtime monitoring avoids unnecessary lease terminations for leases past the primary term."

  const accountingText =  "- Reconcile monthly purchaser statements to daily field data for both oil and gas.  Never miss getting paid on a crude oil haul again. \n - Comparison of water hauling invoices to daily field data improves approval integrity. \n - Daily field data enables the financial team to develop more accurate and timely accruals."
  
  const operationsText = "- Easily review daily production volumes, pressures and other well data to optimize production. \n - Track equipment operational metrics reducing unscheduled downtime and lease operating expenses. \n - Manage tank capacities improving timing of water hauls and crude sales."
  
  const reservesText = "- Simplifying transfer of daily and monthly production volumes, pressures and operational data to the reserve engineering package provides more time for evaluating forecasts when timing is compressed. \n - Combining real-time production data and with the reserves forecast allows operators to focus on the underperforming wells quicker."
  
  const regulatoryText = "- Seamless State and Federal reporting reduces reporting errors and non-compliance notices. \n - Log and store inspections (APCE, Facility, AVO, etc) for timely response to compliance requests"
  
  const marketingText = "- Daily management of tank capacities enables timing of crude sales.\n - Monitor daily gas flows to avoid imbalance penalties."
  


  function handlePopoverOpenOperations(event){
    setAnchorEl(event.currentTarget);
    setText(operationsText);
  };

  function handlePopoverCloseOperations(){
    setAnchorEl(null);
    setText(Prams)
  };

  function handlePopoverOpenMarketing(event){
    setAnchorEl(event.currentTarget);
    setText(marketingText)
  };

  function handlePopoverCloseMarketing(){
    setAnchorEl(null);
    setText(Prams)
  };

  function handlePopoverOpenAccounting (event) {
    setAnchorEl(event.currentTarget);
    setText(accountingText)
  };

  function handlePopoverCloseAccounting(){
    setAnchorEl(null);
    setText(Prams)
  };

  function handlePopoverOpenReserves(event) {
    setAnchorEl(event.currentTarget);
    setText(reservesText)
  };

  function handlePopoverCloseReserves(){
    setAnchorEl(null);
    setText(Prams)

  };

  function handlePopoverOpenReg(event){
    setAnchorEl(event.currentTarget);
    setText(regulatoryText)

  };

  function handlePopoverCloseReg(){
    setAnchorEl(null);
    setText(Prams)
  }

  return (
    <Card className={classes.block}>
            <br></br>

      <Typography className={classes.headerTextBlue}>PRAMS benfits the entire organization</Typography>
      <br></br>

      <Grid className={classes.center} container spacing={10}>
        <Grid >
          <Card className={classes.blueCircleLeft}>
            <Typography
              onMouseEnter={handlePopoverOpenReg}
              onMouseLeave={handlePopoverCloseReg}
            >
              <Regulatory />
            </Typography>
          </Card>
        </Grid>

        <Grid>
          <Card className={classes.blueCircleRight}>
            <Typography
              onMouseEnter={handlePopoverOpenOperations}
              onMouseLeave={handlePopoverCloseOperations}
              >
              <Operations />
            </Typography>
          </Card>        
        </Grid>  
      </Grid>

      <Grid className={classes.center} container spacing={10}>
        <Grid>
          <Card className={classes.blueCircleLeft}>
            <Typography
              onMouseEnter={handlePopoverOpenReserves}
              onMouseLeave={handlePopoverCloseReserves}
            >
              <Reserves />
            </Typography>
          </Card>
        </Grid>
        
        <Grid>
          <Card className={classes.textBlock}>
            <CardContent className={classes.whiteText}>
              {text}
            </CardContent>
          </Card>
        </Grid>

        <Grid>
          <Card className={classes.blueCircleRight}>
            <Typography
              onMouseEnter={handlePopoverOpenAccounting}
              onMouseLeave={handlePopoverCloseAccounting}
            >
              <Accounting />  
            </Typography>
          </Card>
        </Grid>    
      </Grid>

        <Grid className={classes.center} container spacing={10}>
        <Grid className={classes.headerTextBlue}>
          <Card className={classes.blueCircleLeft}>
            <Typography
              onMouseEnter={handlePopoverOpenLand}
              onMouseLeave={handlePopoverCloseLand}
            >
              <Land> </Land>
            </Typography>
          </Card>
        </Grid>

        <Grid >
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
      <br></br>   
    </Card>
  );
}

