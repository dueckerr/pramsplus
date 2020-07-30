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
        <CardContent>
            <Typography component="p" className={classes.whiteText}>Simplifying transfer of daily and monthly production volumes, pressures and operational data to the reserve engineering package provides more time for evaluating forecasts when timing is compressed.</Typography>
    <Typography component="p" className={classes.whiteText}>Combining real-time production data and with the reserves forecast allows operators to focus on the underperforming wells quicker.</Typography>
      {/* <img src={logo} alt="..." className={classes.imageSmall} /> */}
        </CardContent>
    </Card>
  );
}
