  
import React, { useContext, useEffect, useState } from 'react'
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
import {useImage} from 'react-image'

import Land from "./Benefits/Land"
import Marketing from "./Benefits/Marketing"
import Operations from "./Benefits/Operations"
import Accounting from "./Benefits/Accounting"
import Reserves from "./Benefits/Reserves"
import Regulatory from "./Benefits/Regulatory"
import Benefits from "./Benefits/Benefits"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";
import Pic from "assets/img/marketing2.png"

// Box Content
import LogoText from "./BenefitsText/Logo"
import LandText from "./BenefitsText/Land"
import MarketingText from "./BenefitsText/Marketing"
import OperationsText from "./BenefitsText/Operations"
import AccountingText from "./BenefitsText/Accounting"
import ReservesText from "./BenefitsText/Reserves"
import RegulatoryText from "./BenefitsText/Regulatory"

const useStyles = makeStyles(styles);

export default function Software() {
  
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [text, setText] = useState();

  
    useEffect(() => {
      setText(<LogoText />);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [window.location.search,])

  function handlePopoverOpenLand(event){
    setAnchorEl(event.currentTarget);
    setText(<LandText />);
  };

  function handlePopoverCloseLand(){
    setAnchorEl(null);
    setText(<LogoText />);
  };
  


  function handlePopoverOpenOperations(event){
    setAnchorEl(event.currentTarget);
    setText(<OperationsText />);
  };

  function handlePopoverCloseOperations(){
    setAnchorEl(null);
    setText( <LogoText />);
  };

  function handlePopoverOpenMarketing(event){
    setAnchorEl(event.currentTarget);
    setText(<MarketingText />)
  };

  function handlePopoverCloseMarketing(){
    setAnchorEl(null);
    setText( <LogoText />);
  };

  function handlePopoverOpenAccounting (event) {
    setAnchorEl(event.currentTarget);
    setText(<AccountingText />)
  };

  function handlePopoverCloseAccounting(){
    setAnchorEl(null);
    setText( <LogoText />);
  };

  function handlePopoverOpenReserves(event) {
    setAnchorEl(event.currentTarget);
    setText(<ReservesText />)
  };

  function handlePopoverCloseReserves(){
    setAnchorEl(null);
    setText( <LogoText />);

  };

  function handlePopoverOpenReg(event){
    setAnchorEl(event.currentTarget);
    setText(<RegulatoryText />)

  };

  function handlePopoverCloseReg(){
    setAnchorEl(null);
    setText( <LogoText />);
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
              {text}
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

