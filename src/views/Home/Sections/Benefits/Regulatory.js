import React from 'react';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// react components for routing our app without refresh
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import regulatory from "assets/img/regulatory.jpg"
// core components

import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Regulatory() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handlePopoverOpen = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handlePopoverClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
  
    return (
      <div className={classes.blockSoftware}>
        <Typography
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        >
                <br></br>
            <img src={regulatory} alt="..." className={classes.imageSmall} />
            <p className={classes.lowerHeaderText}>Regulatory</p>
  
        </Typography>
        <Popover
          id="mouse-over-popover"
          className={classes.popover}
          classes={{
            paper: classes.paper,
          }}
          open={open}
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          onClose={handlePopoverClose}
          disableRestoreFocus
        >
      <Typography>
              
        <Grid className={classes.software} >
            <p className={classes.blueText}>
            Seamless State and Federal reporting reduces reporting errors and non-compliance notices.
            </p>
            <p className={classes.blueText}>
            Log and store inspections (APCE, Facility, AVO, etc) for timely response to compliance requests.
            </p>
          </Grid>
          </Typography>
        </Popover>
      </div>
    );
  }
  