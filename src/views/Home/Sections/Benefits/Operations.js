import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import operations from "assets/img/operations.jpeg"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Operations() {
  const classes = useStyles();
  return (
    <div className={classes.blockSoftware}>
      <br></br>
      <img src={operations} alt="..." className={classes.imageSmall} />
      <Typography className={classes.lowerHeaderText}>Operations </Typography>
    </div>
  );
}
