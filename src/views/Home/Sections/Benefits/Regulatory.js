import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import reg from "assets/img/reg.png"
// core components

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Regulatory() {
    const classes = useStyles();
  
    return (
      <div className={classes.blockSoftware}>
        <br></br>
        <img src={reg} alt="..." className={classes.imageSmall} />
        <Typography className={classes.lowerHeaderText}>Regulatory</Typography>
      </div>
    );
  }
  