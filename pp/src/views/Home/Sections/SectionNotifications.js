import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components

import styles from "assets/jss/material-kit-react/views/componentsSections/basicsStyle.js";

const useStyles = makeStyles(styles);

export default function HomePageMiddle() {
  const classes = useStyles();

  React.useEffect(() => {});
  return (
    <div className={classes.sections}>
      <div className={classes.container}>
        <div className={classes.title}>
          <h2>PRAMS Plus</h2>
          <hr></hr>
        </div>
        <div id="buttons">
          <div className={classes.title}>
            <h3>
              20 Years of Proven Success
              <br />
            </h3>
            <p>
              PramsX2 is an end-to-end oil and gas production management
              software designed to conquer the complex data-management
              challenges facing todayâ€™s oil and gas operators. The ability to
              rapidly and accurately capture, analyze, and manage production
              data is vital to the success of every oil and gas operator. At
              PRAMS we empower our clients with the ability to swiftly capture,
              analyze, and distribute information with confidence and
              consistency.
            </p>
            <br></br>
            <p>
              Operators frequently overlook product-management efficiency and
              revert to unorganized and time-consuming spreadsheets, a factor
              that too often erodes the operatorâ€™s profitability. By
              simplifying field data capture through single-point data entry, we
              equip pumpers, engineers, analysts, and operators with the ability
              to effectively manage what they measure.
            </p>
            <br></br>
            <p>
              The use of an integrated production system simplifies data
              acquisition and allows everyone in the organization to utilize the
              production information they need to do their jobs. Anyone can
              easily see, review and export daily and historical production data
              using flexible and customizable processes.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
