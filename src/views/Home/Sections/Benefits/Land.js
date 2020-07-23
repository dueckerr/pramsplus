import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import moneyJack from "assets/img/moneyJack.jpg"
// core components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Land() {
    const classes = useStyles();

    return (
      <Card className={classes.blockSoftware}>
        <br></br>
        <img src={moneyJack} alt="..." className={classes.imageSmall} />
        <Typography className={classes.lowerHeaderText}>Land</Typography>
      </Card>
    );
  }
  