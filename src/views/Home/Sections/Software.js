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
                AnaylstX2å
                <br />
                <small className={classes.smallTitle}>Field Data Capture</small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some for people to be able to follow them outside the site.
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
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some for people to be able to follow them outside the site.
                </p>
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
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some for people to be able to follow them outside the site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6} className={classes.itemGrid}>
                <img
                  src={insight}
                  alt="Hosted & On-Premises Options"
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
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some for people to be able to follow them outside the site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
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
                  You can write here details about one of your team members. You
                  can give more details about what they do. Feel free to add
                  some for people to be able to follow them outside the site.
                </p>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
