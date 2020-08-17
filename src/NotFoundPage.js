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

import styles from "assets/jss/material-kit-react/views/components.js";
import logo from "assets/img/PPlogo.jpg";

const useStyles = makeStyles(styles);

export default function NotFoundPage(props) {
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
              <small className={classes.socials}>404 - Page Not Found</small>
            </h3>
            {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}

              <p className={classes.blueText}>
              Wree </p>
              <Grid className={classes.blueBlock} container spacing={2}>
              <img src={logo} alt="..." className={classes.imagePush} />

              </Grid>

            </Grid>
          {/* </Grid> */}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}