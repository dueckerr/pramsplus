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
import Pumper from "./Files/Pumper"
import PumperText from "./FileText/Pumper"
import InsightText from "./FileText/Insight"
import ServerText from "./FileText/Server"
import AnalystText from "./FileText/Analyst"
import Server from "./Files/Server"
import Analyst from "./Files/Analyst"
import Insight from "./Files/Insight"
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
            {/* <Grid item xs={12} sm={12} md={12} lg={12}> */}

              <p className={classes.blueText}>
              Below are the links to download installation packages for the different components of the PRAMS platform. While you can download the installers at any time to run them you will need additional information and/or a DKF file. Your company’s PRAMS administrator will provide this to you.</p>
              <Grid className={classes.blueBlock} container spacing={2}>
                <Grid item xs={5} sm={5} md={5} lg={3}>
                  <Pumper />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <PumperText />
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={3}>
                  <Analyst />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <AnalystText />
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={3}>
                  <Insight />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <InsightText />
                </Grid>
                <Grid item xs={5} sm={5} md={5} lg={3}>
                  <Server />
                </Grid>
                <Grid item xs={7} sm={7} md={7} lg={7}>
                  <ServerText />
                </Grid>
              </Grid>

            </Grid>
          {/* </Grid> */}
        </div>
        
      </div>
      <Footer />
    </div>
  );
}
