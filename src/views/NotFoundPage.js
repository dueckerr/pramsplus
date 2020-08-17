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
import { Link } from 'react-router-dom';

import logo from "assets/img/PPlogo.jpg";
import styles from "assets/jss/material-kit-react/views/components.js";

const useStyles = makeStyles(styles);

export default function NotFoundPage(props) {
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


            <img src={logo}  />
            <p style={{textAlign:"center", fontSize: "28px",
}}>
              <Link to="/">Go to Home </Link>
            </p>
      </div>
      <Footer />
    </div>
  );
}
