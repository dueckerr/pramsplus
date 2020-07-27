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
              Below are the links to download installation packages for the different components of the PRAMS platform. While you can download the installers at any time to run them you will need additional information and/or a DKF file. Your company’s PRAMS administrator will provide this to you.</p>
              <p className={classes.blueText}>
              InsightX2 is the data presentation software that allows you to look at charts and data, run internal reports and extract data for offline use. This software is usually used by all users at a company who need to view or extract production data. To install this software you must have a valid DKF file available.              </p>
              Download: <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=2361">Insight</Button>  
              <p className={classes.blueText}>
              AnalystX2 is the main application used by the Production Analyst to manage the PRAMS system. This software is normally used only by individuals who are responsible for managing the production processes. To install this software you must have a valid DKF file available.</p>
              Download: <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=180">Analyst</Button>  
              <p className={classes.blueText}>
              PumperX2 is the daily data capture tool used by operators to capture daily data. It can be used off line in the field or in direct mode if a network connection is available. In order to use this installer you must have your company ID, pumper ID and password.</p>
              Download: <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=183">Pumper</Button>  
              <p className={classes.blueText}>
              The server installer is used only by the company’s IT administrator to install the necessary server and database components for the PRAMSX2 system. You will need additional information provided by your PRAMS support staff to use this installer.              </p>
              Download: <Button className={classes.link} href="https://update.pramsplus.com/file/download?id=179">Server</Button>  
            </Grid>
          </Grid>
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
