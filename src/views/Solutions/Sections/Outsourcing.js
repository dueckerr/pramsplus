import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import CustomTabs from "components/CustomTabs/CustomTabs.js";
import Grid from "@material-ui/core/Grid";

import logo from "assets/img/logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  text: {
    padding: "10px",
    color: "black",
    textAlign: "center",
    border: 0,
    borderRadius: 3,
  },
  block: {
    padding: "10px",
    color: "white",
    textAlign: "center",
    backgroundColor: "white",
    border: 0,
    borderRadius: 3,
  },
}));

export default function Outsourcing() {
  const classes = useStyles();
  const imageClasses = classNames(classes.imgFluid);
  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={4}>
          <img src={logo} alt="..." className={imageClasses} />
        </Grid>
        <Grid xs={12} sm={12} md={8}>
          <h3>
            <small className={classes.text}>Additional Services</small>
          </h3>
          <CustomTabs
            xs={12}
            sm={12}
            md={4}
            plainTabs
            headerColor="info"
            tabs={[
              {
                tabName: "SCADA Integration",
                tabContent: (
                  <p className={classes.text}>
                    I think that’s a responsibility that I have, to push
                    possibilities, to show people, this is the level that things
                    could be at. So when you get something that has the name
                    Kanye West on it, it’s supposed to be pushing the furthest
                    possibilities. I will be the leader of a company that ends
                    up being worth billions of dollars, because I got the
                    answers. I understand culture. I am the nucleus.
                  </p>
                ),
              },
              {
                tabName: "Features",
                tabContent: (
                  <div className={classes.block}>
                    <Grid className={classes.block} container spacing={3}>
                      <Grid tem xs={12} sm={12} md={6} lg={4}>
                        <ul className={classes.text}>
                          <li>Automatic Volume Calculations</li>
                          <li>Flexible Gas Volume Data Entry</li>
                          <li>Corrected Run Ticket Entry</li>
                          <li>Multi-tiered Daily Data Allocation</li>
                          <li>Downtime Production Accounting</li>
                          <li>Pressure Recording (casing, tubing, Bradenhead)</li>
                          <li>Route-Based Data Entry</li>
                          <li>Remote “Offline” Laptop Data Entry</li>
                        </ul>
                      </Grid>
                      <Grid tem xs={12} sm={12} md={6} lg={4}>
                        <ul className={classes.text}>
                          <li>3rd Party Import Capabilities—SCADA systems included</li>
                          <li>Ability to Capture/Calculate Oil/Water Gauges (color cut)</li>
                          <li>Capture equipement information</li>
                          <li>Built in AVO Inspection</li>
                          <li>Customizable facility and APCE inspections</li>
                          <li>Customizable layouts for every well</li>
                        </ul>
                      </Grid>
                    </Grid>
                  </div>
                ),
              },
            ]}
          />
        </Grid>
      </Grid>
    </div>
  );
}
