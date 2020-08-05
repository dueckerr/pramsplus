import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from "assets/img/logo.png"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeStylePricing.js";
import CardContent from '@material-ui/core/CardContent';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(styles);


export default function RightPricing() {
  const classes = useStyles();

  return (
    <div>
        <ul className={classes.whiteTextBulletPoints}>
            <li> Access to the entire PRAMS Platform</li>
            <li> No Yearly Renewal Fees </li>
            <li> Free Call Support</li>
            <li> Personalized Queries </li>
        </ul>
    </div> 
 );
}
