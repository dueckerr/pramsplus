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
          <Grid xs={12} sm={12} md={6}>
            <h3>
              <small className={classes.socials}>PRAMS Software Downloads</small>
            </h3>
            <ul className={classes.featuresText}>
              <li><Button className={classes.link} href="https://update.pramsplus.com/file/download?id=2361">Insight</Button></li>
              <li><Button className={classes.link} href="https://update.pramsplus.com/file/download?id=180">Analyst</Button></li>
              <li><Button className={classes.link} href="https://update.pramsplus.com/file/download?id=183">Pumper</Button></li>
              <li><Button className={classes.link} href="https://update.pramsplus.com/file/download?id=179">Server</Button></li>
            </ul>
          </Grid>
        </div>
      </div>
      <Footer />
    </div>
  );
}
