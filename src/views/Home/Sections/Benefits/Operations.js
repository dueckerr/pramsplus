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
      <p className={classes.lowerHeaderText}>Operations </p>

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
            Easily review daily production volumes, pressures and other well data to optimize production.
            </p>
            <p className={classes.blueText}>
            Track equipment operational metrics reducing unscheduled downtime and lease operating expenses.
            </p>
            <p className={classes.blueText}>
            Manage tank capacities improving timing of water hauls and crude sales.
            </p>
        </Grid>
        </Typography>
      </Popover>
    </div>
  );
}
