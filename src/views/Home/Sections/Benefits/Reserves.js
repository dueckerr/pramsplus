import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import reserves from "assets/img/reserves.jpeg"

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Operations() {
  const classes = useStyles();

  return (
    <div className={classes.blockSoftware}>
      <br></br>
      <img src={reserves} alt="..." className={classes.imageSmall} />
      <Typography className={classes.lowerHeaderText}>Reserves </Typography>
    </div>
  );
}
