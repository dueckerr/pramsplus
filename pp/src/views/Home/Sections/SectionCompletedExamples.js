import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/completedStyle.js";

const useStyles = makeStyles(styles);

export default function SectionCompletedExamples() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2>3 Windows Based Programs</h2>
            <h4>
              Lucas ipsum dolor sit amet jango amidala dagobah qui-gon yoda
              sebulba dagobah dooku darth darth. Hutt jabba kenobi calamari.
              Solo calamari wampa yavin mara. Darth amidala hutt padmé r2-d2
              jabba. Darth wicket sidious luke owen calamari mon obi-wan yavin.
              Darth padmé boba mothma grievous skywalker greedo antilles vader.
            </h4>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
