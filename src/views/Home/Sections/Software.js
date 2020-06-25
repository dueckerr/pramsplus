import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import classNames from "classnames";
import styles from "assets/jss/material-kit-react/views/landingPageSections/teamStyle.js";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import Card from "components/Card/Card.js";
import CardBody from "components/Card/CardBody.js";

import analyst from "assets/img/bbl.png";
import pumper from "assets/img/pump.png";
import insight from "assets/img/chart.png";
import cloud from "assets/img/cloud.jpeg";
import outsourcing from "assets/img/outsourcing.jpeg";

const useStyles = makeStyles(styles);

export default function Software() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgRaised, classes.image);
  return (
    <div className={classes.section}>
      <h2 className={classes.title}>What we offer</h2>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={analyst}
                  alt="Field Data Capture"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                AnaylstX2
                <br />
                <small className={classes.smallTitle}>Field Data Capture</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Consistent, accurate, and organized production volumes, dispositions, and allocations are paramount in successful oil and gas operations. PramsX2 offers superior automated in-house, partner, and regulatory reporting—easily managed through an intuitive interface.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={insight}
                  alt="Well Production Data Visualization"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                InsightX2
                <br />
                <small className={classes.smallTitle}>
                  Well Production Data Visualization
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Production data is increasingly valuable throughout an oil and gas organization. At PRAMS we believe that each member of an organization should be able to easily access, organize, and utilize production data. With InsightX2—PramX2’s read-only charting and reporting interface—anyone within an organization is able to easily extract necessary data without additional cost or licensing.                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={pumper}
                  alt="Field Data Capture Tool"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                PumperX2
                <br />
                <small className={classes.smallTitle}>
                  Field Data Capture Tool
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                PRAMS daily data capture interface—PumperX2—was designed by pumpers for pumpers. This field data capture tool seamlessly integrates all necessary daily production data and eliminates spreadsheet redundancies through its’ single-point data entry design.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={cloud}
                  alt="Hosted & On-Premises Options"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Server Infrastructure
                <br />
                <small className={classes.smallTitle}>
                Hosted & On-Premises Options
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa. Odio tempor orci dapibus ultrices in iaculis nunc sed. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio ut enim blandit volutpat maecenas volutpat. Viverra aliquet eget sit amet tellus cras adipiscing enim. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={outsourcing}
                  alt="Production accounting outsourcing"
                  className={imageClasses}
                />
              </GridItem>
              <h4 className={classes.cardTitle}>
                Allocation & Reporting Outsourcing
                <br />
                <small className={classes.smallTitle}>
                  Analyst and Regulatory Role 
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed tempus urna et pharetra pharetra massa massa. Odio tempor orci dapibus ultrices in iaculis nunc sed. Morbi blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio ut enim blandit volutpat maecenas volutpat. Viverra aliquet eget sit amet tellus cras adipiscing enim. Nulla at volutpat diam ut venenatis tellus in metus vulputate. Aliquam purus sit amet luctus venenatis lectus magna fringilla urna. Massa sed elementum tempus egestas sed sed risus pretium. Tristique senectus et netus et malesuada fames.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
