import React from 'react';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import marketing from "assets/img/marketing.jpg"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);


export default function Marketing() {
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
        <img src={marketing} alt="..." className={classes.imageSmall} />
        <p className={classes.lowerHeaderText}> Marketing </p>

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
            

    <Grid className={classes.software}>
            <p className={classes.blueText}>
            Daily management of tank capacities enables timing of crude sales.
            </p>
            <p className={classes.blueText}>
            Monitor daily gas flows to avoid imbalance penalties.
            </p>
        </Grid>
        </Typography>
      </Popover>
    </div>
  );
}
