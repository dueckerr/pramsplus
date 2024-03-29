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
import WorkSectionCopy from "../About/Sections/WorkSection copy";
import Pricing from "./Sections/Pricing.js";
import logo from "assets/img/PPlogo.jpg";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Home(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        brand="PRAMS Plus"
        rightLinks={<HeaderLinks />}
        fixed
        {...rest}
      />
      <Parallax image={require("assets/img/chartsPumpPipeline.jpg")}>

      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <PramsStatement />
        <Software />
        <Pricing />
        <PRAMSMission />
        {/* <SectionWorked /> */}
        {/* <WorkSection /> */}
        <WorkSectionCopy />

      </div>
      <Footer />
    </div>
  );
}
