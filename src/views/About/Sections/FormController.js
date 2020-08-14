import React, { Component, useContext, useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
// import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
//import Button from '../components/Button';
import { Button, Alert, Form, Row, Col, InputGroupText } from 'reactstrap';
import Input from './Input';

const regex = {
    'name': RegExp(/^([A-Za-z]{2,})$/),
    'email': RegExp(/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/),
    'phone': RegExp(/^([0-9]{10})$/)
};

const initState = () => ({
    formData: {
        firstName: "",
        companyName: "",
        emailAddress: "",
        phoneNumber: "",
        formErrors: {
            firstName: null,
            companyName: null,
            emailAddress: null,
            phoneNumber: null,
        }
    },
    formValidation: "",
    formValid: 0
});

class FormContainer extends Component {
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

    handleResetForm = () => {
        this.setState(initState());
    }

    handleInput = e => {
        console.log('hi')
        e.preventDefault();
        const { value } = e.target;
        const { name } = e.target;

        let formErrors = this.state.formData.formErrors;

        switch (name) {
            case 'firstName':
                formErrors.firstName = !(regex.name.test(value)) ? "At least 2 characters, letters only" : "";
                break;
            case 'companyName':
                formErrors.companyName = !(regex.name.test(value)) ? "At least 2 characters, letters only" : "";
                break;
            case 'emailAddress':
                formErrors.emailAddress = !(regex.email.test(value)) ? "At least 2 characters, only letters allowed" : "";
                break;
            case 'phoneNumber':
                formErrors.phoneNumber = !(regex.phone.test(value)) ? "Exactly 10 characters, only digits allowed" : "";
                break;
            default: break;
        }

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
        
        if (this.formValid(this.state.formData)) {
            const env = process.env;
            if (!env.REACT_APP_EMAILJS_USER || !env.REACT_APP_EMAILJS_TEMPLATE || !env.REACT_APP_EMAILJS_SERVICE) {
                alert("You must provide User ID, Template ID and Service ID in .env file.");
            } else {
                const subject = "Form data received!";
                const message_html = "First Name: " + this.state.formData.firstName + "<br>"
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
                    alert("Your mail was sent!");
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

        return (
            <Form noValidate onSubmit={this.handleSubmit}>
                <Row form>
                    <Col sm={12} lg={{ size: 3, offset: 3 }}>
                            <Input
                                    className="text-left m-0 p-0"
                                    type={"text"}
                                    label={"Name:"}
                                    name={"firstName"}
                                    value={this.state.formData.firstName}
                                    onChange={this.handleInput}
                                    required
                                    error={formErrors.firstName}
                                />
                    </Col>
                        <Col sm={12} lg={{ size: 3 }}>
                                <Input
                                    type={"text"}
                                    label={"Company Name"}
                                    name={"companyName"}
                                    value={this.state.formData.companyName}
                                    onChange={this.handleInput}
                                    required
                                    error={formErrors.companyName}
                                />
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <Input
                                    padding = "10px"
                                    type={"email"}
                                    label={"Email Address"}
                                    name={"emailAddress"}
                                    value={this.state.formData.emailAddress}
                                    onChange={this.handleInput}
                                    required
                                    error={formErrors.emailAddress}
                                    addon="@"
                                    addonType="prepend"
                                />
                            </Col>
                            <Col xs={12} sm={12} md={6}>
                                <Input
                                    type={"text"}
                                    label={"Phone Number"}
                                    name={"phoneNumber"}
                                    value={this.state.formData.phoneNumber}
                                    onChange={this.handleInput}
                                    required
                                    error={formErrors.phoneNumber}
                                    addonType="append"
                                />
                            </Col>
                        </Row>
                        <Row form>
                            <Col sm={12} md={{ size: 6, offset: 3 }}>
                                {(this.state.formValidation !== "") && (
                                    <Alert color="danger" className="mt-4">Please fill-out all the required fields.</Alert>
                                )}
                                <div className="mt-2">
                                    <div className="float-left">
                                        <Button color={"primary"}> Submit</Button>
                                        {/*{` `}<Button color={"warning"}>Another button</Button>*/}
                                    </div>

                                </div>
                            </Col>
                        </Row>
                    </Form>
        );
    }
}

export default FormContainer;