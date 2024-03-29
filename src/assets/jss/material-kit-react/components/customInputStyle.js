import {
  primaryColor,
  dangerColor,
  successColor,
  defaultFont
} from "assets/jss/material-kit-react.js";

const customInputStyle = {
  disabled: {
    "&:before": {
      borderColor: "rgb(2, 46, 105)"
    }
  },
  underline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "rgb(2, 46, 105)",
      borderWidth: "1px !important"
    },
    "&:after": {
      borderColor: primaryColor
    }
  },
  underlineError: {
    "&:after": {
      borderColor: dangerColor
    }
  },
  underlineSuccess: {
    "&:after": {
      borderColor: successColor
    }
  },
  whiteUnderline: {
    "&:hover:not($disabled):before,&:before": {
      borderColor: "rgb(2, 46, 105)"
    },
    "&:after": {
      borderColor: "rgb(2, 46, 105)"
    }
  },
  labelRoot: {
    ...defaultFont,
    color: "rgb(2, 46, 105)",
    fontWeight: "400",
    fontSize: "14px",
    lineHeight: "1.42857",
    top: "10px",
    letterSpacing: "unset",
    "& + $underline": {
      marginTop: "0px"
    }
  },
  labelRootError: {
    color: dangerColor + "rgb(2, 46, 105)"
  },
  labelRootSuccess: {
    color: successColor + "rgb(2, 46, 105)"
  },
  formControl: {
    margin: "0 0 17px 0",
    paddingTop: "27px",
    position: "relative",
    "& svg,& .fab,& .far,& .fal,& .fas,& .material-icons": {
      color: "#495057"
    }
  },
  input: {
    color: "#495057",
    height: "unset",
    "&,&::placeholder": {
      fontSize: "14px",
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      fontWeight: "400",
      lineHeight: "1.42857",
      opacity: "1"
    },
    "&::placeholder": {
      color: "#AAAAAA"
    }
  },
  whiteInput: {
    "&,&::placeholder": {
      color: "rgb(2, 46, 105)",
      opacity: "1"
    }
  }
};

export default customInputStyle;
