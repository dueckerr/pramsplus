import { container } from "assets/jss/material-kit-react.js";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left"
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: "600",
    display: "inline-block",
    color: "black",
    margin: "-60px 30px 0px",
    position: "absolute",
    top: -215,
    left: 40,
    zIndex: "tooltip",
    background: "rgb(102, 153, 153)",
    padding: "0 18px",
    boxShadow: '3px 3px 5px 2px rgb(2, 46, 105)',
    fontFamily: "'Montserrat', sans-serif"
  },
  subtitle: {
    fontSize: "1.313rem",
    maxWidth: "500px",
    margin: "10px 0 0"
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3",
    borderRadius: 30,
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: 30,
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)"
  },
  link: {
    padding: "2.5px",
    textAlign: "left",
    fontSize: "16px",
    lineHeight: "35px",
    color: "white",
    backgroundColor: "rgb(2, 46, 105)",
    border: 0,
  },
  textCenter: {
    textAlign: "center"
  },
  image: {
    borderRadius: 30,
    height: "auto",
    width: "55%",
    border: '5px',
    // flexShrink: 10,
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: "center",
    // // overflow: 'hidden',
    // position: "absolute",
    // boxShadow: '5px 8px 7px 8px rgb(2, 46, 105)',

  }
};

export default componentsStyle;
