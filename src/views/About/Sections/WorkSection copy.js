import React, { Component, useContext, useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { withStyles } from "@material-ui/core/styles";


const styles = theme => ({
  section: {
    color: "rgb(2, 46, 105)",
    backgroundColor: "#FFFFF"
  },
  button: {
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "rgb(2, 46, 105)",
    color: "white",
    justify: "right",
    fontSize: "1.313rem",
  },
  description: {
    textAlign: "center",
    color: "rgb(2, 46, 105)",
    fontSize: "1.313rem",
    paddingLeft: "15px ",
    paddingRight: "15px ",
  },
});

function Copyright() {
  return (
    <Typography >
      {'Copyright © '}
      <Link href="https://pramsplus.com/">
        PRAMS Plus LLC
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const initState = () => ({
  formData: {
      name: "",
      companyName: "",
      emailAddress: "",
      phoneNumber: "",
      formErrors: {
          name: null,
          companyName: null,
          emailAddress: null,
          phoneNumber: null,
      }
  },
  formValidation: "",
  formValid: 0
});

class WorkSection extends Component {
  constructor(props) {
		super(props);

        this.state = initState();
    }

  formValid = () => {
      let valid = true;

      // validate form errors empty
      Object.values(this.state.formData.formErrors).forEach(val => {
          val !== null && val.length > 0 && (valid = false);
      });

      //validate the form was filled out
      Object.values(this.state.formData).forEach(val => {
          val === "" && (valid = false);
      });

      this.setState({ formValidation: valid ? "" : "Form contains errors, please fill all the fields according to the specified rules." });

      return valid;
  }


    render() {

      const { formErrors } = this.state.formData;
      const { classes } = this.props;

      return (
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={12}>
                <h4 className={classes.description}>
                  Imagine how a digital workflow can impact your business.
                    To schedule your live information session, fill out our form or call us today! 
                </h4>
                <h4 className={classes.description}>
                  Click "Contact Us" below to send us an email.
                </h4>
              </GridItem>

              <GridItem cs={12} sm={12} md={12}>
                <h4 className={classes.description}>10288 W. Chatfield Ave., Suite 200, Littleton, CO 80127</h4>
                <h4 className={classes.description}>Phone: (303)-904-6855</h4>
                <h4 className={classes.description}>Email: sales@pramsplus.com</h4>
                <h4 className={classes.description}> {'Copyright © '} PRAMS Plus LLC{' '}{new Date().getFullYear()}{'.'}</h4>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
            <Button
              className={classes.button}
              href="mailto:sales@pramsplus.com"
            >
              Contact Us
            </Button>
            </GridContainer>
            <br></br>
          </div>
        );
      }
  }

  export default withStyles(styles, { withTheme: true }) (WorkSection);

