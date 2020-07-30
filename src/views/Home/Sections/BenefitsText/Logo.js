import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logo from "assets/img/logo.png"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);


export default function Logo() {
  const classes = useStyles();

  return (
    <Card>
    <Typography component="p" className={classes.lowerHeaderText}>Hover over each department to see how the PRAMS platform affects your business.</Typography>\
      <img src={logo} alt="..." className={classes.imageSmall} />
    </Card>
  );
}
