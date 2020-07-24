import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import Grid from "@material-ui/core/Grid";

// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Components(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="PRAMS Plus"
        link="/"
        rightLinks={<HeaderLinks />}
        {...rest}
      />
      <br></br>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <Grid xs={12} sm={12} md={12}>
            <h3>
              <small className={classes.socials}>PRAMS Software Downloads</small>
            </h3>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <p className={classes.blueText}>
              PramsX2 is an end-to-end oil and gas production management software designed to conquer the complex data-management challenges facing oil and gas operators. The ability to rapidly and accurately capture, analyze, and manage production data is vital to the success of every oil and gas operator. PRAMS enables operators to capture, analyze, and distribute information with confidence and consistency.
              </p>
              <p className={classes.blueText}>
              By simplifying field data capture through single-point data entry, we equip pumpers, foreman, engineers, analysts, and operators with the ability to effectively manage what they measure.
              </p>
              <p className={classes.blueText}>
              The use of an integrated production system simplifies data acquisition and allows everyone in the organization to utilize the production information they need to do their jobs. Anyone can easily see, review and export daily and historical production data using flexible and customizable processes.          </p>
            </Grid>
            <ul>
              <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=2361">Insight</Button>  
              <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=180">Analyst</Button>  
              <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=183">Pumper</Button>  
              <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=179">Server</Button>  
            </ul>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}
