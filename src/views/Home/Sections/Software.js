import React from "react";
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import classNames from "classnames";
import assetMgmt from "assets/img/assetMgmt.jpeg";
import fieldDataCapture from "assets/img/fieldDataCapture.jpeg";
import datacharts2 from "assets/img/datacharts2.png"
// core components
import Grid from "@material-ui/core/Grid";

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeBlueBack.js";

const useStyles = makeStyles(styles);

export default function Software() {
  const classes = useStyles();

  return (
    <div className={classes.block}>
      <div className={classes.title}>
        <h3 className={classes.headerTextBlue}>What we offer</h3>
      </div>
      <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={fieldDataCapture} alt="..." className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p className={classes.lowerHeaderText}>Field Data Capture </p>
          <p className={classes.blueText}>The most vital part of a Production Accounting software is the data entry process.  It must be intuitive and easily understandable as users enter the data. Over the past 15 years PRAMS has refined this process and has created the perfect gauge-sheet style interface data entry proceess.</p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p className={classes.lowerHeaderText}>Asset Management </p>
          <p className={classes.blueText}>Meters, valves, site inspections, and production data just a few parts of the puzzle </p>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <img src={assetMgmt} alt="..." className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
        <img src={datacharts2} alt="..." className={classes.image} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <p className={classes.lowerHeaderText}>Data Visualization </p>
          <p className={classes.blueText}>img </p>
        </Grid>

        {/* Additonal services section Server Structure and BPO */}
        
        </Grid>
        <div className={classes.title}>
          <h3 className={classes.headerTextBlue}>Additional Services</h3>
        </div>
        <Grid className={classes.paper} container spacing={3}>
        <Grid item xs={12} sm={12} md={4} lg={6}>
          <p className={classes.blueText}>Server Infastructure </p>
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={6}>
          <p className={classes.blueText}>BPO </p>
        </Grid>
      </Grid>
    </div>
  );
}

              {/* <h4 className={classes.cardTitle}>
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
          <GridItem xs={12} sm={12} md={6}>
            <Card >
              <GridItem xs={12} sm={12} md={6}>

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
          <GridItem xs={12} sm={12} md={6}>
            <Card plain>
              <GridItem xs={12} sm={12} md={6}>        
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
              <GridItem xs={12} sm={12} md={6}>
         
              </GridItem>
              <h4 className={classes.cardTitle}>
                Business Process Outsourcing
                <br />
                <small className={classes.smallTitle}>
                Allocation & Reporting 
                </small>
              </h4>
              <CardBody>
                <p className={classes.description}>
                PRAMS can fulfill your monthly allocation and reporting roles. As companies, especially smaller operators, look to better manage their operating costs, some of our clients have opted to outsource their reporting to PRAMS.  We will review your production at the end of each month and file the appropriate reports to any state and complete the allocation process.  Our goal is to take some of the tedious work off you plate, to allow operators to focus on more vital and revenue generating work. 
               </p>

              </CardBody>
            </Card>
          </GridItem>
        </GridContainer> */}