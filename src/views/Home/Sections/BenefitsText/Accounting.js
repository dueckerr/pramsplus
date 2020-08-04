import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from "assets/img/logo.png"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(styles);


export default function Logo() {
  const classes = useStyles();

  return (
    <Card className={classes.textBlock}>
            <Typography className={classes.lowerHeaderText}>Accounting</Typography>
        <CardContent>
              <Typography component="p" className={classes.whiteText}>Reconcile monthly purchaser statements to daily field data for both oil and gas.  Never miss getting paid on a crude oil haul again.</Typography>
    <Typography component="p" className={classes.whiteText}>Comparison of water hauling invoices to daily field data improves approval integrity.</Typography>
       <Typography component="p" className={classes.whiteText}>Daily field data enables the financial team to develop more accurate and timely accruals.</Typography>
       </CardContent>
    </Card>    
  );
}
