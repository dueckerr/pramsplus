import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import BOE from "./Counters/BOE.js";
import Reports from "./Counters/Reports.js";
import Wells from "./Counters/Wells.js";

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeStyle.js";

const useStyles = makeStyles(styles)

export default function FullWidthGrid() {
  const classes = useStyles();

  return (
    <div className={classes.blueBlock}>
      <div className={classes.title}>
        <h3 className={classes.lowerHeaderText}>20 Years of Proven Success</h3>
      </div>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
          <BOE />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <Wells />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4} md={4} lg={4}>
          <Paper className={classes.paper}>
            <Reports />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
