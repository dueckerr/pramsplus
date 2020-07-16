import React from "react";
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
                  className="text-input"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  value={feedback}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                    className="text-input"
                    id="email"
                    name="email"
                    onChange={handleChange}
                    placeholder="Enter your email"
                    required
                    value={feedback}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Company"
                  className="text-input"
                  id="feedback-entry"
                  name="feedback-entry"
                  onChange={handleChange}
                  placeholder="Your Company"
                  required
                  value={feedback}
                />
              </GridItem>
              <GridItem xs={12} sm={12} md={6}>
                <CustomInput
                  labelText="Your Phone Number"
                  className="text-input"
                  id="number"
                  name="number"
                  onChange={handleChange}
                  placeholder="Enter your number"
                  required
                  value={number}
                />
              </GridItem>
              <CustomInput
                labelText="Message"
                id="message"
                className="text-input"
                name="message"
                onChange={handleChange}
                placeholder="Enter your feedback here"
                required
                value={message}
                inputProps={{
                  multiline: true,
                  rows: 5,
                }}
              />
              <GridItem xs={12} sm={12} md={4}>
                <Button color="success" onSubmit={handleSubmit} value="Submit">Contact Us</Button>
              </GridItem>
            </GridContainer>
          </form>
        </GridItem>
      </GridContainer>
    </div>
  );
}
