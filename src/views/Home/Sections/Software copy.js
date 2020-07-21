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
import { setTextRange } from 'typescript';

const useStyles = makeStyles(styles);

export default function Software() {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState([]);
  // const listItems = text.map((d) => <li key={d.name}>{d.name}</li>);


  const handlePopoverOpenLand = (event) => {
    setAnchorEl(event.currentTarget);
    setText([landText]);
  };

  useEffect(() => {
    setText("PRAMS");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.location.search,])

  const handlePopoverCloseLand = () => {
    setAnchorEl(null);
    setText(null)
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

  const handlePopoverOpenOperations = (event) => {
    setAnchorEl(event.currentTarget);
    console.log(anchorEl)
    setText([operationsText]);
    console.log(text)
  };

  const handlePopoverCloseOperations = () => {
    setAnchorEl(null);
    setText("PRAMS")
  };

  const handlePopoverOpenMarketing = (event) => {
    setAnchorEl(event.currentTarget);
    setText(marketingText)
  };

  const handlePopoverCloseMarketing = () => {
    setAnchorEl(null);
    setText("PRAMS")

  };

  const handlePopoverOpenAccounting = (event) => {
    setAnchorEl(event.currentTarget);
    setText(accountingText)
  };

  const handlePopoverCloseAccounting = () => {
    setAnchorEl(null);
    setText("PRAMS")

  };

  const handlePopoverOpenReserves = (event) => {
    setAnchorEl(event.currentTarget);
    setText(reservesText)
  };

  const handlePopoverCloseReserves = () => {
    setAnchorEl(null);
    setText("PRAMS")

  };

  const handlePopoverOpenReg = (event) => {
    setAnchorEl(event.currentTarget);
    setText(regulatoryText)

  };

  const handlePopoverCloseReg = () => {
    setAnchorEl(null);
    setText("PRAMS")

  };
  const openLand = Boolean(anchorEl);
  const openOperations = Boolean(anchorEl);
  const openReserves = Boolean(anchorEl);
  const openReg = Boolean(anchorEl);
  const openMarketing = Boolean(anchorEl);
  const openAccounting = Boolean(anchorEl);

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h3 className={classes.headerTextBlue}>PRAMS benfits the entire organization</h3>
        <br></br>
      </div>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          {/* Land Component */}
          <div className={classes.blockSoftware}>
            <Typography
              aria-owns={openLand ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpenLand}
              onMouseLeave={handlePopoverCloseLand}
            >
                <br></br>
                <img src={moneyJack} alt="..." className={classes.imageSmall} />
                <p className={classes.lowerHeaderText}>Land</p>
      
            </Typography>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={openLand}
              anchorEl={anchorEl}
              onClose={handlePopoverCloseLand}
              disableRestoreFocus
            />
          </div>
        </Grid>

        <Grid item xs={12} sm={6}>
        <div className={classes.blockSoftware}>
      <Typography
        aria-owns={openOperations ? 'mouse-over-popover' : undefined}
        aria-haspopup="true"
        onMouseEnter={handlePopoverOpenOperations}
        onMouseLeave={handlePopoverCloseOperations}
      >
                <br></br>

    <img src={operations} alt="..." className={classes.imageSmall} />
      <p className={classes.lowerHeaderText}>Operations </p>

      </Typography>
      <Popover
        id="mouse-over-popover"
        className={classes.popover}
        classes={{
          paper: classes.paper,
        }}
        open={openOperations}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverCloseOperations}
        disableRestoreFocus
      />
    </div>        
    </Grid>  

        <Grid item xs={12} md={4}>
          <div className={classes.blockSoftware}>
            <Typography
              aria-owns={openReserves ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpenReserves}
              onMouseLeave={handlePopoverCloseReserves}
            >
              <br></br>
          <img src={operations} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Reserves </p>

            </Typography>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={openReserves}
              anchorEl={anchorEl}
              onClose={handlePopoverCloseReserves}
              disableRestoreFocus
              setText={reservesText}
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
            <ul className={classes.whiteText}>
              {text}
            </ul>
      </div>
        

        <Grid item xs={12} md={4}>
          <div className={classes.blockSoftware}>
            <Typography
              aria-owns={openAccounting ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpenAccounting}
              onMouseLeave={handlePopoverCloseAccounting}
            >
                      <br></br>

                  <img src={regulatory} alt="..." className={classes.imageSmall} />
                  <p className={classes.lowerHeaderText}>Accounting</p>

            </Typography>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={openAccounting}
              anchorEl={anchorEl}
              onClose={handlePopoverCloseAccounting}
              disableRestoreFocus
              />
          </div>
        </Grid>    

        <Grid item xs={12} sm={6}>
          <div className={classes.blockSoftware}>
            <Typography
              aria-owns={openReg ? 'mouse-over-popover' : undefined}
              onMouseEnter={handlePopoverOpenReg}
              onMouseLeave={handlePopoverCloseReg}
            >
                    <br></br>
                <img src={regulatory} alt="..." className={classes.imageSmall} />
                <p className={classes.lowerHeaderText}>Regulatory</p>
      
              </Typography>
              <Popover
                id="mouse-over-popover"
                className={classes.popover}
                classes={{
                  paper: classes.paper,
                }}
                open={openReg}
                anchorEl={anchorEl}
                onClose={handlePopoverCloseReg}
                disableRestoreFocus
              />
              </div>
              </Grid>

        <Grid item xs={12} sm={6}>
          <div className={classes.blockSoftware}>
            <Typography
              aria-owns={openMarketing ? 'mouse-over-popover' : undefined}
              aria-haspopup="true"
              onMouseEnter={handlePopoverOpenMarketing}
              onMouseLeave={handlePopoverCloseMarketing}
            >
              <br></br>
              <img src={marketing} alt="..." className={classes.imageSmall} 
              />
              <h3 className={classes.lowerHeaderText}> Marketing </h3>

            </Typography>
            <Popover
              id="mouse-over-popover"
              className={classes.popover}
              classes={{
                paper: classes.paper,
              }}
              open={openMarketing}
              anchorEl={anchorEl}
              onClose={handlePopoverCloseMarketing}
              disableRestoreFocus
              />
          </div>
        </Grid> 
      </Grid>        
    </div>
  );
}