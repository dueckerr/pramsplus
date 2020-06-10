import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.js";
import Footer from "components/Footer/Footer.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Parallax from "components/Parallax/Parallax.js";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.js";
import SectionProductionAccounting from "./Sections/SectionProductionAccounting.js";
import SectionAutomation from "./Sections/SectionAutomation.js";
import SectionRegulatory from "./Sections/SectionRegulatory.js";
import SectionFieldDataCapture from "./Sections/SectionFieldDataCapture.js";
import SectionDataReporting from "./Sections/SectionDataReporting.js";

import WorkSection from "../About/Sections/WorkSection";

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
        fixed
        color="transparent"
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/bg2.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
                <h1 className={classes.title}>PRAMS Plus</h1>
                <h3 className={classes.subtitle}>More for Less</h3>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <SectionAutomation />
        <SectionProductionAccounting />
        <SectionRegulatory />
        <SectionFieldDataCapture />
        <SectionDataReporting />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
