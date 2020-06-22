import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import classNames from "classnames";
import team1 from "assets/img/logo.png";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
  block: {
    padding: "10px",
    color: "white",
    textAlign: "center",
    backgroundColor: "rgb(2, 46, 105)",
    border: 0,
    borderRadius: 3,
  },
}));
export default function PramsStatement() {
  const classes = useStyles();
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );
  React.useEffect(() => {});
  return (
    <div className={classes.block}>
      <Grid className={classes.block} container spacing={3}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <h3>MANAGE WHAT YOU MEASURE</h3>
          <h4>
            At PRAMS we believe you should {"''"}Manage what you Measure
            {"''"} not spend your limited time managing your software package.
            This philosophy drives on-going development and ensures that your
            investment results in the maximum return. Easy access to dail and
            historical production data in a consistent and technologcally secure
            manner is what we are all about.
          </h4>
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={team1} alt="..." className={imageClasses} />
        </Grid>
      </Grid>
    </div>
  );
}
