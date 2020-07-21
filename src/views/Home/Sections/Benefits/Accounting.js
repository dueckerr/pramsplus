import React from 'react';
import Popover from '@material-ui/core/Popover';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import regulatory from "assets/img/operations.jpg"
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";

const useStyles = makeStyles(styles);


export default function Accounting() {
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
            <p className={classes.lowerHeaderText}>Accounting</p>

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
            Reconcile monthly purchaser statements to daily field data for both oil and gas.  Never miss getting paid on a crude oil haul again.
            </p>
            <p className={classes.blueText}>
            Comparison of water hauling invoices to daily field data improves approval integrity.
            </p>
            <p className={classes.blueText}>
            Daily field data enables the financial team to develop more accurate and timely accruals.
            </p>
        </Grid>
        </Typography>
      </Popover>
    </div>
  );
}
