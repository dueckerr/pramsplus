import { defaultFont } from "assets/jss/material-kit-react.js";

import tooltip from "assets/jss/material-kit-react/tooltipsStyle.js";

const headerLinksStyle = (theme) => ({
  list: {
    ...defaultFont,
    fontSize: "28px",
    margin: 0,
    paddingTop: "15px",
    paddingBottom: "5px",
    color: "rgb(2, 46, 105)",
    fontWeight: 400
  },
  link: {
    color: "rgb(2, 46, 105)",
    paddingLeft: "5px",
    paddingRight: "5px",
    paddingTop: "25px"
  },

  listItem: {
    float: "left",
    color: "rgb(2, 46, 105)",
    position: "relative",
    display: "block",
    width: "auto",
    margin: "0",
    paddingLeft: "15px",
    paddingRight: "15px",
    
  },
  navLink: {
    color: "rgb(2, 46, 105)",
    position: "relative",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    borderRadius: "3px",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    [theme.breakpoints.down("sm")]: {
      width: "calc(100% - 30px)",
      marginLeft: "15px",
      marginBottom: "8px",
      marginTop: "8px",
      textAlign: "left",
      "& > span:first-child": {
        justifyContent: "flex-start",
      },
    },
  },
  notificationNavLink: {
    color: "rgb(2, 46, 105)",
    padding: "0.9375rem",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
    top: "4px",
  },
  registerNavLink: {
    top: "3px",
    position: "relative",
    fontWeight: "400",
    fontSize: "12px",
    textTransform: "uppercase",
    lineHeight: "20px",
    textDecoration: "none",
    margin: "0px",
    display: "inline-flex",
  },
  navLinkActive: {
    color: "rgb(2, 46, 105)",
    backgroundColor: "rgba(255, 255, 255, 0.1)",
  },
  icons: {
    width: "20px",
    height: "20px",
    marginRight: "3px",
  },
  socialIcons: {
    position: "relative",
    fontSize: "20px !important",
    marginRight: "4px",
  },
  dropdownLink: {
      color: "rgb(2, 46, 105)",
      textDecoration: "none",
      display: "block",
      padding: "10px 20px",
  },
  ...tooltip,
  marginRight5: {
    marginRight: "5px",
  },
});

export default headerLinksStyle;
