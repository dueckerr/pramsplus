import React from 'react';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import regulatory from "assets/img/regulatory.jpg"
// core components

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Benefits() {
    const classes = useStyles();

  
    return (
      <div className={classes.blockSoftware}>
                <br></br>
                <br></br>
                <br></br>
                <br></br>
          <h3 className={classes.headerTextWhite}> PRAMS </h3>
      </div>
    );
  }
  
