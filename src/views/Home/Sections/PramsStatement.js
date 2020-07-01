import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import connectedOilField from "assets/img/connectedOilField.jpeg";
import Grid from "@material-ui/core/Grid";
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeStyle.js";

const useStyles = makeStyles(styles)

export default function PramsStatement() {
  const classes = useStyles();

  React.useEffect(() => {});
  return (
    <div className={classes.blueBlock}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={6}>
          <h3 className={classes.headerTextWhite}>Connecting Field to Office</h3>
          <h3 className={classes.lowerHeaderText}>USER-DRIVEN DESIGN & DEVELOPMENT </h3>
          <p className={classes.whiteText}>
            Founded in 2005, PRAMS Plus mission is to provide quality solutions that deliver measurable value and ROI to production companies. Our flagship solftware, PRAMS X2, is used by a wide range of operators, operating anywhere from 10 wells to over 2,000 wells.  We truely are the solution for the small to mid-size operators.
          </p>
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={6}>
        <img src={connectedOilField} alt="..." className={classes.imagePramsStatement} />
        </Grid>
      </Grid>
    </div>
  );
}
