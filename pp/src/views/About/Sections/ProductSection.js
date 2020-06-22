import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

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

export default function ProductSection() {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem xs={12} sm={12} md={8}>
          <h2 className={classes.text}>The PRAMS Story</h2>
          <h5 className={classes.text}>
            This is the paragraph where you can write more details about your
            product. Keep you user engaged by providing meaningful information.
            Remember that by this time, the user is curious, otherwise he wouldn
            {"'"}t scroll to get here. Add a button if you want the user to see
            more.
          </h5>
        </GridItem>
      </GridContainer>
      <br></br>
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <p className={classes.text}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn
              {"'"}t scroll to get here. Add a button if you want the user to
              see more.
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <p className={classes.text}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn
              {"'"}t scroll to get here. Add a button if you want the user to
              see more.
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <p className={classes.text}>
              This is the paragraph where you can write more details about your
              product. Keep you user engaged by providing meaningful
              information. Remember that by this time, the user is curious,
              otherwise he wouldn
              {"'"}t scroll to get here. Add a button if you want the user to
              see more.
            </p>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
}
