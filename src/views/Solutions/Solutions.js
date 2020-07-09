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

import FieldDataCapture from "./Sections/FieldDataCapture.js";
import ProductionAccounting from "./Sections/ProductionAccounting.js";
import RegulatoryReporting from "./Sections/RegulatoryReporting.js";
import PushReporting from "./Sections/PushReporting.js";
import Outsourcing from "./Sections/Outsourcing.js";
import logo from "assets/img/PPlogo.jpg";

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
        changeColorOnScroll={{
          height: 400,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/oilFlow.jpg")}>
        <div className={classes.container}>
          <GridContainer>
            <GridItem>
              <div className={classes.brand}>
              <img src={logo} alt="..." className={classes.image} />
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <FieldDataCapture />
        <ProductionAccounting />
        <PushReporting />
        <RegulatoryReporting />
        <Outsourcing />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
