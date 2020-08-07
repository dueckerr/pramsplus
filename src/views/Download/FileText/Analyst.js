import React from "react";
// nodejs library that concatenates classes
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Grid from "@material-ui/core/Grid";
// sections for this page
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
      
    <div className={classes.container}>
      <p className={classes.blueText}>
      AnalystX2 is the main application used by the Production Analyst to manage the PRAMS system. This software is normally used only by individuals who are responsible for managing the production processes. To install this software you must have a valid DKF file available.</p>
    </div>
  );
}
