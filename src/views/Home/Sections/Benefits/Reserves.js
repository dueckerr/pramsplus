import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import operations from "assets/img/operations.jpg"
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Operations() {
  const classes = useStyles();

  return (
    <Card className={classes.blockSoftware}>
      <br></br>
      <img src={operations} alt="..." className={classes.imageSmall} />
      <Typography className={classes.lowerHeaderText}>Reserves </Typography>
    </Card>
  );
}
