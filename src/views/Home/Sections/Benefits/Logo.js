import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import accounting from "assets/img/accounting2.png"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);


export default function Logo() {
  const classes = useStyles();

  return (
    <Card className={classes.blockSoftware}>
      
      <img src={accounting} alt="..." className={classes.imageSmall} />
    </Card>
  );
}
