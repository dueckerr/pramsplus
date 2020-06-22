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
import PramsStatement from "./Sections/PramsStatement.js";
import PRAMSMission from "./Sections/PRAMSMission.js";
import Software from "./Sections/Software.js";
import SectionWorked from "./Sections/SectionWorked.js";
import WorkSection from "../About/Sections/WorkSection";
import Pricing from "./Sections/Pricing.js";

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
      <Parallax image={require("assets/img/grey.png")}>
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
        <PramsStatement />
        <PRAMSMission />
        <SectionWorked />
        <Software />
        <Pricing />
        <WorkSection />
      </div>
      <Footer />
    </div>
  );
}
