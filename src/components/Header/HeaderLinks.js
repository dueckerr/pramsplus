/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components

import styles from "assets/jss/material-kit-react/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/home">Home</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/solutions">Solutions</Link>
      </ListItem>
      {/* <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/about">About</Link>
      </ListItem> */}
      <ListItem className={classes.listItem}>
          <Link className={classes.link} to="/download">Downloads</Link>
      </ListItem>
      <ListItem className={classes.listItem}>
          <a className={classes.link} target="_blank" href="https://portal.pramsplus.com/Account/Login?ReturnUrl=%2F">Portal</a>
      </ListItem>
      <ListItem className={classes.listItem}>
        < a href="https://www.gotomeeting.com/join" target="_blank">< img src="https://weblibrary.cdn.getgo.com/embedMN/1.0.0/en/images/Small_120X60.png" width="120" height="60" border="0" /></a >
      </ListItem>
    </List>
  );
}
