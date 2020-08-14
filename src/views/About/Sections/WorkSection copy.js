import React, { Component, useContext, useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
// import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  section: {
    padding: "50px 0",
    color: "rgb(2, 46, 105)",
    backgroundColor: "#FFFFF"
  },
  title: {
    marginBottom: "30px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    color: "rgb(2, 46, 105)",
    fontSize: "4.2rem",
    fontWeight: "600",

  },
  button: {
    marginBottom: "30px",
    marginTop: "30px",
    minHeight: "32px",
    textDecoration: "none",
    textAlign: "center",
    backgroundColor: "rgb(2, 46, 105)",
    color: "white"
  },
  description: {
    color: "#999",
    textAlign: "center",
    color: "rgb(2, 46, 105)",
    fontSize: "1.313rem",

  },
  textCenter: {
    textAlign: "center",
    color: "rgb(2, 46, 105)"
  },
  textArea: {
    color: "rgb(2, 46, 105)",
    width: '25ch',
    textAlign: "center",
    display: 'flex',
    flexWrap: 'wrap',
    position: "relative",

  }
});

const regex = {
  'name': RegExp(/^([A-Za-z]{2,})$/),
  'email': RegExp(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/),
  'phone': RegExp(/^([0-9]{10})$/)
};

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
  handleInput = e => {
    console.log("ji")
    console.log(this.state.formData)
        e.preventDefault();
        const { value } = e.target;
        const { name } = e.target;

        let formErrors = this.state.formData.formErrors;

        // switch (name) {
        //     case 'name':
        //         formErrors.name = !(regex.name.test(value)) ? "At least 2 characters, letters only" : "";
        //         break;
        //     case 'companyName':
        //         formErrors.companyName = !(regex.name.test(value)) ? "At least 2 characters, letters only" : "";
        //         break;
        //     case 'emailAddress':
        //         formErrors.emailAddress = !(regex.email.test(value)) ? "At least 2 characters, only letters allowed" : "";
        //         break;
        //     case 'phoneNumber':
        //         formErrors.phoneNumber = !(regex.phone.test(value)) ? "Exactly 10 characters, only digits allowed" : "";
        //         break;
        //     default: break;
        // }

        this.formValid();

        this.setState(
            prevState => ({
                formData: {
                    ...prevState.formData,
                    [name]: value
                }
            })
        );
    }

    handleSubmit = e => {
      e.preventDefault();
      if (this.state.formData) {
        console.log("ji")
          const env = process.env;
          if (!env.REACT_APP_EMAILJS_USER || !env.REACT_APP_EMAILJS_TEMPLATE || !env.REACT_APP_EMAILJS_SERVICE) {
              alert("You must provide User ID, Template ID and Service ID in .env file.");
          } else {
              const subject = "Form data received!";
              const message_html = "First Name: " + this.state.formData.name + "<br>"
                  + "Last Name: " + this.state.formData.lastName + "<br>"
                  + "Mail Address: " + this.state.formData.emailAddress + "<br>"
                  + "Phone Number: " + this.state.formData.phoneNumber;

              const data = {
                  service_id: env.REACT_APP_EMAILJS_SERVICE,
                  template_id: env.REACT_APP_EMAILJS_TEMPLATE,
                  user_id: env.REACT_APP_EMAILJS_USER,
                  template_params: {
                      'to': this.state.formData.emailAddress,
                      "subject": subject,
                      "message_html": message_html
                  }
              };
              this.sendEmail(data);
          }
      }
  }

    sendEmail = data => {
        const headers = {
            "Content-type": "application/json"
        };

        const options = {
            method: "POST",
            headers: headers,
            body: JSON.stringify(data)
        };

        fetch("https://api.emailjs.com/api/v1.0/email/send", options)
            .then((httpResponse) => {
                if (httpResponse.ok) {
                    alert("Your message was sent!");
                } else {
                    return httpResponse.text()
                        .then(text => Promise.reject(text));
                }
            })
            .catch((error) => {
                console.log("Oops... " + error);
            });
    }

    render() {

      const { formErrors } = this.state.formData;
      const { classes } = this.props;

      return (
          <div className={classes.section}>
            <GridContainer justify="center">
              <GridItem cs={11} sm={11} md={8}>
                <h2 className={classes.title}>Contact Us</h2>
                <h4 className={classes.description}>
                  Imagine how a digital workflow can impact your business. To schedule
                  your live information session, fill out our form or call us today!
                </h4>
                  <form noValidate onSubmit={this.handleSubmit} >
                <GridContainer xs={12} sm={12} md={12}>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="standard-full-width"
                        className={classes.textArea}
                        type={"text"} 
                        name={"name"}
                        label={"Name"}
                        value={this.state.formData.name}
                        onChange={this.handleInput}
                        required
                        error={formErrors.name}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="standard-full-width"
                        className={classes.textArea}
                        type={"text"}
                        label={"Company Name"}
                        name={"companyName"}
                        value={this.state.formData.companyName}
                        onChange={this.handleInput}
                        required
                        error={formErrors.companyName}                
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                        id="standard-full-width"
                        className={classes.textArea}
                        type={"email"}
                        label={"Email Address"}
                        name={"emailAddress"}
                        value={this.state.formData.emailAddress}
                        onChange={this.handleInput}
                        required
                        error={formErrors.emailAddress}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <TextField
                      id="standard-full-width"
                      className={classes.textArea}
                      type={"number"}
                      label={"Phone Number"}
                      name={"phoneNumber"}
                      value={this.state.formData.phoneNumber}
                      onChange={this.handleInput}
                      required
                      error={formErrors.phoneNumber}
                        />
                    </GridItem>
                    
                    <GridItem xs={12} sm={12} md={6}>
         
                      <Button
                        type="submit"
                        className={classes.button}
                        >
                          Contact Us</Button>
                    </GridItem>
                  </GridContainer>
                </form>
              </GridItem>
            </GridContainer>
          </div>
        );
      }
  }

  export default withStyles(styles, { withTheme: true }) (WorkSection);

