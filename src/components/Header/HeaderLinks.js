/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// core components
import Button from "components/CustomButtons/Button.js";

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link className={classes.link} to="/">Home</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link className={classes.link} to="/solutions">Solutions</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link className={classes.link} to="/about">About</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link className={classes.link} to="/download">Download</Link>
        </Button>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link className={classes.link} to="/solutions">Case Studies</Link>
        </Button>
      </ListItem> */}
      <ListItem className={classes.listItem}>
        <Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <Link className={classes.link} to="/login-page">Login</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button>
        < a href="https://www.gotomeeting.com/join" >< img src="https://weblibrary.cdn.getgo.com/embedMN/1.0.0/en/images/Small_120X60.png" width="120" height="60" border="0" /></a >        </Button>
      </ListItem>
    </List>
  );
}
