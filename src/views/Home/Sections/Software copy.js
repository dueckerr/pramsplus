import React, { useContext, useEffect, useState } from 'react'
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

import operations from "assets/img/operations.jpg"
import marketing from "assets/img/marketing.jpg"
import regulatory from "assets/img/regulatory.jpg"
import moneyJack from "assets/img/moneyJack.jpg"

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Software() {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState({});
    
  const handlePopoverOpenLand = (event) => {
    landText.map(function(item) {
      console.log (item)
    })
    setText(landText);
  };

  useEffect(() => {
    setText("PRAMS");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search,])

  const handlePopoverCloseLand = () => {
    
    setText("PRAMS")
  };


  const landText = [
     {text: "Well downtime monitoring avoids unnecessary lease terminations for leases past the primary term."}
  ]

  const accountingText = [
   {text: "Reconcile monthly purchaser statements to daily field data for both oil and gas.  Never miss getting paid on a crude oil haul again."},
   {text: "Comparison of water hauling invoices to daily field data improves approval integrity."},
   {text:"Daily field data enables the financial team to develop more accurate and timely accruals."}
  ]
  const operationsText = [
     {text: "Easily review daily production volumes, pressures and other well data to optimize production."},
     {text: "Track equipment operational metrics reducing unscheduled downtime and lease operating expenses."},
     {text: "Manage tank capacities improving timing of water hauls and crude sales."}
  ]
  const reservesText = [
     {text: "Simplifying transfer of daily and monthly production volumes, pressures and operational data to the reserve engineering package provides more time for evaluating forecasts when timing is compressed."},
    {text: "Combining real-time production data and with the reserves forecast allows operators to focus on the underperforming wells quicker."}
  ]
  const regulatoryText = [
     {text: "Seamless State and Federal reporting reduces reporting errors and non-compliance notices"},
    {text: "Log and store inspections (APCE, Facility, AVO, etc) for timely response to compliance requests"}
  ]
  const marketingText = [
     {text: "Daily management of tank capacities enables timing of crude sales."},
    {text: "Monitor daily gas flows to avoid imbalance penalties."}
  ]

  const handlePopoverOpenOperations = () => {
    operationsText.map(function(item) {
      console.log (item)
      setText({operationsText});
    })
    console.log(text)
  };

  const handlePopoverCloseOperations = () => {
    setText("PRAMS")
  };

  const handlePopoverOpenMarketing = () => {
    setText(marketingText)
    console.log(text)

  };

  const handlePopoverCloseMarketing = () => {
    setText("PRAMS")

  };

  const handlePopoverOpenAccounting = () => {
    setText(accountingText)
    console.log(text)

  };

  const handlePopoverCloseAccounting = () => {
    setText("PRAMS")

  };

  const handlePopoverOpenReserves = () => {
    setText(reservesText)
  };

  const handlePopoverCloseReserves = () => {
    setText("PRAMS")

  };

  const handlePopoverOpenReg = (event) => {
   
    setText(regulatoryText)

  };

  const handlePopoverCloseReg = () => {
    setText("PRAMS")

  };

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <Typography
        component={'span'} variant={'body2'} className={classes.headerTextBlue}>PRAMS benfits the entire organization</Typography>
        <br></br>
      </div>
      <Grid container spacing={10}>
        <Grid item xs={10} sm={6}>
          {/* Land Component */}
          <div className={classes.blockSoftware}>
            <Typography
            component={'span'} variant={'body2'}
              onMouseEnter={handlePopoverOpenLand}
              onMouseLeave={handlePopoverCloseLand}
            >
                <br></br>
                <img src={moneyJack} alt="..." className={classes.imageSmall} />
                <Typography
                component={'span'} variant={'body2'} className={classes.lowerHeaderText}>Land</Typography>
      
            </Typography>
            <Popover
              id="mouse-over-popover"
              onClose={handlePopoverCloseLand}
              disableRestoreFocus
            />
          </div>
        </Grid>

        <Grid item xs={10} sm={6}>
        <div className={classes.blockSoftware}>
      <Typography
      component={'span'} variant={'body2'}
        onMouseEnter={handlePopoverOpenOperations}
        onMouseLeave={handlePopoverCloseOperations}
      >
                <br></br>

    <img src={operations} alt="..." className={classes.imageSmall} />
      <Typography
      component={'span'} variant={'body2'} className={classes.lowerHeaderText}>Operations </Typography>

      </Typography>
      <Popover
        id="mouse-over-popover"
        onClose={handlePopoverCloseOperations}
        disableRestoreFocus
      />
    </div>        
    </Grid>  

        <Grid item xs={10} md={4}>
          <div className={classes.blockSoftware}>
            <Typography
            component={'span'} variant={'body2'}
              onMouseEnter={handlePopoverOpenReserves}
              onMouseLeave={handlePopoverCloseReserves}
            >
              <br></br>
          <img src={operations} alt="..." className={classes.imageSmall} />
            <Typography
            component={'span'} variant={'body2'} className={classes.lowerHeaderText}>Reserves </Typography>

            </Typography>
            <Popover
              id="mouse-over-popover"
              onClose={handlePopoverCloseReserves}
              />
            </div>
        </Grid>
{/* sdfdsfdsf

sdfsdfdskfasdlkfjasdfkasdlkfjasdklfjasdklfjasdlkfjasdlkfjasdlkfjasdlkfjasdlkf
sdfsdfdskfasdlkfjasdfkasdlkfjasdklfjasdklfjasdlkfjasdlkfjasdlkfjasdlkfjasdlkf
sdfsdfdskfasdlkfjasdfkasdlkfjasdklfjasdklfjasdlkfjasdlkfjasdlkfjasdlkfjasdlkf
sdfsdfdskfasdlkfjasdfkasdlkfjasdklfjasdklfjasdlkfjasdlkfjasdlkfjasdlkfjasdlkf
sdfsdfdskfasdlkfjasdfkasdlkfjasdklfjasdklfjasdlkfjasdlkfjasdlkfjasdlkfjasdlkf


*/}
      <div className={classes.textBlock}>
        <ul>
          <li className={classes.whiteText}>{text}</li> 
        </ul>
      </div>
        

        <Grid item xs={10} md={4}>
          <div className={classes.blockSoftware}>
            <Typography
            component={'span'} variant={'body2'}
              onMouseEnter={handlePopoverOpenAccounting}
              onMouseLeave={handlePopoverCloseAccounting}
            >
                      <br></br>

                  <img src={regulatory} alt="..." className={classes.imageSmall} />
                  <Typography
                  component={'span'} variant={'body2'} className={classes.lowerHeaderText}>Accounting</Typography>

            </Typography>
            <Popover
              id="mouse-over-popover"
              onClose={handlePopoverCloseAccounting}
              />
          </div>
        </Grid>    

        <Grid item xs={10} sm={6}>
          <div className={classes.blockSoftware}>
            <Typography
            component={'span'} variant={'body2'}
              onMouseEnter={handlePopoverOpenReg}
              onMouseLeave={handlePopoverCloseReg}
            >
                    <br></br>
                <img src={regulatory} alt="..." className={classes.imageSmall} />
                <Typography
                component={'span'} variant={'body2'} className={classes.lowerHeaderText}>Regulatory</Typography>
      
              </Typography>
              <Popover
                id="mouse-over-popover"
                onClose={handlePopoverCloseReg}
              />
              </div>
              </Grid>

        <Grid className={classes.blockSoftware} item xs={10} sm={6}>
            <Typography
            component={'span'} variant={'body2'}
              onMouseEnter={handlePopoverOpenMarketing}
              onMouseLeave={handlePopoverCloseMarketing}
            >
              <br></br>
              <img src={marketing} alt="..." className={classes.imageSmall} 
              />
              <Typography
              component={'span'} variant={'body2'} className={classes.lowerHeaderText}> Marketing </Typography>

            </Typography>
            <Popover
              id="mouse-over-popover"
              onClose={handlePopoverCloseMarketing}
              />
        </Grid> 
      </Grid>        
    </div>
  );
}

