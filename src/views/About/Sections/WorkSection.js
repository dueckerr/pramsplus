import React, { useContext, useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import TextField from "@material-ui/core/TextField";
import Button from "components/CustomButtons/Button.js";
import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";
import FormController from "./FormController"
const useStyles = makeStyles(styles);

export default function WorkSection() {

  const [ name, setName ] =  React.useState('');
  const [ company, setCompany ] =  React.useState('');
  const [ email, setEmail ] =  React.useState('');
  const [ number, setNumber ] =  React.useState('');
  const [ message, setMessage ] =  React.useState(' ');
  const [ submitting, setSubmitting ] = useState(false);

  const handleChange = (event) => {
    setName(event.value.name);
    setCompany(event.value.company);
    setEmail(event.value.email);
    setNumber(event.value.number);
    setMessage(event.value.message);
  };
  
  function handleSubmit(e) {
    setCompany(company)
    console.log( 'Email:', email, 'Name: ', name); 
}

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={11} sm={11} md={8}>
          <h2 className={classes.title}>Contact Us</h2>
          <h4 className={classes.description}>
            Imagine how a digital workflow can impact your business. To schedule
            your live information session, fill out our form or call us today.
          </h4>
          <FormController />
        </GridItem>
      </GridContainer>
    </div>
  );
}
