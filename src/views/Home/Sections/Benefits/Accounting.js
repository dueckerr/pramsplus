import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import regulatory from "assets/img/operations.jpg"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);


export default function Accounting() {
  const classes = useStyles();

  return (
    <Card className={classes.blockSoftware}>
      <br></br>
      <img src={regulatory} alt="..." className={classes.imageSmall} />
      <Typography component="p" className={classes.lowerHeaderText}>Accounting</Typography>
    </Card>
  );
}
