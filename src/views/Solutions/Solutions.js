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
import PropTypes from 'prop-types';

import WorkSectionCopy from "../About/Sections/WorkSection copy";

import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function Solutions(props) {
  const classes = useStyles();
  const { ...rest } = props;
  return (
    <div>
      <Header
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 300,
          color: "white",
        }}
        {...rest}
      />
      <Parallax image={require("assets/img/pumpsCharts.jpg")}>

      </Parallax>

      <div className={classNames(classes.main, classes.mainRaised)}>
        <FieldDataCapture />
        <ProductionAccounting />
        <PushReporting />
        <RegulatoryReporting />
        <Outsourcing />
        <WorkSectionCopy />
      </div>
      <Footer />
    </div>
  );
}
