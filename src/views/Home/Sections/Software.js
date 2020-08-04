  
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

  function handlePopoverOpenOperations(event){
    setAnchorEl(event.currentTarget);
    setText(<OperationsText />);
  };

  function handlePopoverOpenMarketing(event){
    setAnchorEl(event.currentTarget);
    setText(<MarketingText />)
  };

  function handlePopoverOpenAccounting (event) {
    setAnchorEl(event.currentTarget);
    setText(<AccountingText />)
  };

  function handlePopoverOpenReserves(event) {
    setAnchorEl(event.currentTarget);
    setText(<ReservesText />)
  };

  function handlePopoverOpenReg(event){
    setAnchorEl(event.currentTarget);
    setText(<RegulatoryText />)

  };

  return (
    <Card className={classes.block}>
            <br></br>

      <Typography className={classes.headerTextBlue}>PRAMS benfits the entire organization</Typography>
      <br></br>

      <Grid className={classes.center} container spacing={10} >
        <Grid >
          <Card className={classes.blueCircle}>
            <Typography
              onMouseEnter={handlePopoverOpenReg}    
            >
              <Regulatory />
            </Typography>
          </Card>
        </Grid>

        <Grid>
          <Card className={classes.blueCircle}>
            <Typography
              onMouseEnter={handlePopoverOpenOperations}                
              >
              <Operations />
            </Typography>
          </Card>        
        </Grid>  
      </Grid>

      <Grid className={classes.center} container spacing={10}>
        <Grid>
          <Card className={classes.blueCircle}>
            <Typography
              onMouseEnter={handlePopoverOpenReserves}            
            >
              <Reserves />
            </Typography>
          </Card>
        </Grid>
        
        <Grid>
              {text}
        </Grid>

        <Grid>
          <Card className={classes.blueCircle}>
            <Typography
              onMouseEnter={handlePopoverOpenAccounting}                
            >
              <Accounting />  
            </Typography>
          </Card>
        </Grid>    
      </Grid>

        <Grid className={classes.center} container spacing={10}>
        <Grid className={classes.headerTextBlue}>
          <Card className={classes.blueCircle}>
            <Typography
              onMouseEnter={handlePopoverOpenLand}    
            >
              <Land />
            </Typography>
          </Card>
        </Grid>

        <Grid >
          <Card className={classes.blueCircle}>
            <Typography
              onMouseEnter={handlePopoverOpenMarketing}              
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

