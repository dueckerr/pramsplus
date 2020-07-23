import React, { useContext, useEffect, useState } from 'react'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import CustomInput from "components/CustomInput/CustomInput.js";
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/views/landingPageSections/workStyle.js";

const useStyles = makeStyles(styles);

export default function WorkSection() {

  const [ name, setName ] = useState('');
  const [ company, setCompany ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ phone, setPhone ] = useState('');
  const [ message, setMessage ] = useState('');
  const [ submitting, setSubmitting ] = useState(false);

  const classes = useStyles();
  return (
    <div className={classes.section}>
      <GridContainer justify="center">
        <GridItem cs={11} sm={11} md={8}>
          <h2 className={classes.title}>Work with us</h2>
          <h4 className={classes.description}>
            Imagine How A Digital Workflow Can Impact Your Business To schedule
            your live information session, fill out our form or call us today
          </h4>
          <form>
          <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Name"
                  id="name"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  required
                  disabled={ submitting }
                  value={ name }
                  onChange={ () => setName() }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Email"
                  id="email"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  required
                  disabled={ submitting }
                  value={ email }
                  onChange={ () => setEmail() }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Company"
                  id="company"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  required
                  disabled={ submitting }
                  value={ company }
                  onChange={ () => setCompany() }
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Phone Number"
                  id="number"
                  formControlProps={{
                    fullWidth: true,
                  }}
                  required
                  disabled={ submitting }
                  value={ phone }
                  onChange={ () => setPhone() }
                />
              </GridItem>
              <CustomInput
                labelText="Message"
                id="message"
                formControlProps={{
                  fullWidth: true,
                  className: classes.textArea,
                }}
                inputProps={{
                  multiline: true,
                  rows: 15,
                }}
                required
                disabled={ submitting }
                value={ message }
                onChange={ () => setMessage() }
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button disabled={ submitting } color="success">Contact Us</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
