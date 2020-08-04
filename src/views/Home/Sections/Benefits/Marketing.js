import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import marketing from "assets/img/marketing2.png"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);


export default function Marketing() {
  const classes = useStyles();
  return (
    <div className={classes.blockSoftware}>
      <br></br>
      <img src={marketing} alt="..." className={classes.imageSmall} />
      <Typography className={classes.lowerHeaderText}>Marketing</Typography>
    </div>
  );
}
