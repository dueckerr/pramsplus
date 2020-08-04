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
            <Typography className={classes.lowerHeaderText}>Operations</Typography>
        <CardContent>
    <Typography component="p" className={classes.whiteText}>Easily review daily production volumes, pressures and other well data to optimize production.</Typography>
    <Typography component="p" className={classes.whiteText}>Track equipment operational metrics reducing unscheduled downtime and lease operating expenses.</Typography>
    <Typography component="p" className={classes.whiteText}>Manage tank capacities improving timing of water hauls and crude sales.</Typography>
    </CardContent>
    </Card>
  );
}
