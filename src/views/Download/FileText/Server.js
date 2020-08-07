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
      The server installer is used only by the company’s IT administrator to install the necessary server and database components for the PRAMSX2 system. You will need additional information provided by your PRAMS support staff to use this installer.              </p>
    </div>
  );
}
