import React from 'react';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import operations from "assets/img/operations.jpg"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);

export default function Operations() {
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
    <img src={operations} alt="..." className={classes.imageSmall} />
      <p className={classes.lowerHeaderText}>Reserves </p>

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
              Simplifying transfer of daily and monthly production volumes, pressures and operational data to the reserve engineering package provides more time for evaluating forecasts when timing is compressed.
            </p>
            <p className={classes.blueText}>
              Combining real-time production data and with the reserves forecast allows operators to focus on the underperforming wells quicker.            </p>
        </Grid>
        </Typography>
      </Popover>
    </div>
  );
}
