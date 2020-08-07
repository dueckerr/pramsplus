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
      InsightX2 is the data presentation software that allows you to look at charts and data, run internal reports and extract data for offline use. This software is usually used by all users at a company who need to view or extract production data. To install this software you must have a valid DKF file available.              </p>
    </div>
  );
}
