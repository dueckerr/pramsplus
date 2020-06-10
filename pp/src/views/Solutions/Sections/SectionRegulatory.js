import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomTabs from "components/CustomTabs/CustomTabs.js";

import styles from "assets/jss/material-kit-react/views/componentsSections/tabsStyle.js";

const useStyles = makeStyles(styles);

export default function SectionTabs() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <div id="nav-tabs">
          <h3>Regulatory Reporting</h3>
          <GridContainer>
            <GridItem xs={12} sm={12} md={12}>
              <h3>
                <small>Regulatory Reporting Creation</small>
              </h3>
              <CustomTabs
                plainTabs
                headerColor="primary"
                tabs={[
                  {
                    tabName: "Federal",
                    tabContent: (
                      <div>
                        <ul className={classes.textCenter}>BLM Seal Report</ul>
                        <ul className={classes.textCenter}>ONRR Report</ul>
                        <ul className={classes.textCenter}>OGOR Report</ul>
                      </div>
                    ),
                  },
                  {
                    tabName: "State",
                    tabContent: (
                      <p className={classes.textCenter}>
                        15 States - ?? Should we write up every state that we
                        have?
                      </p>
                    ),
                  },
                  {
                    tabName: "Details",
                    tabContent: (
                      <p className={classes.textCenter}>
                        Regulatory reporting setup is swift, and out software
                        development tean constantly monitors all agencies for
                        regulatory changes and implements timely updates at no
                        additional costs.
                      </p>
                    ),
                  },
                ]}
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
}
