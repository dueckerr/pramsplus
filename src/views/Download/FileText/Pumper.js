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
      PumperX2 is the daily data capture tool used by operators to capture daily data. It can be used off line in the field or in direct mode if a network connection is available. In order to use this installer you must have your company ID, pumper ID and password.</p>
    </div>
  );
}
