import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Button from "components/CustomButtons/Button.js";

import insight from "assets/img/analyst.png";
import analyst from "assets/img/analyst.png";

import styles from "assets/jss/material-kit-react/views/componentsSections/exampleStyle.js";

const useStyles = makeStyles(styles);

export default function Software() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={insight}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <Button color="primary" size="lg" simple>
              InsightX2
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={analyst}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <Button color="primary" size="lg" simple>
              AnalystX2
            </Button>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <img
              src={analyst}
              alt="..."
              className={
                classes.imgRaised +
                " " +
                classes.imgRounded +
                " " +
                classes.imgFluid
              }
            />
            <Button color="primary" size="lg" simple>
              AnalystX2
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
