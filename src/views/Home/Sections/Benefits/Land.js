import React from 'react';

import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import land from "assets/img/land.jpg"
// core components
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Land() {
    const classes = useStyles();

    return (
      <div className={classes.blockSoftware}>
        <br></br>
        <img src={land} alt="..." className={classes.imageSmall} />
        <Typography className={classes.lowerHeaderText}>Land</Typography>
      </div>
    );
  }
  