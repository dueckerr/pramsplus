import React from 'react';
import Popover from '@material-ui/core/Popover';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import logoOil from "assets/img/logoOil.png";
import styles from "assets/jss/material-kit-react/views/HomeStyle/homeSoftware.js";
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles(styles);


export default function Logo() {
  const classes = useStyles();

  return (
    <Card className={classes.textBlock}>
        <CardContent>
            <Typography className={classes.whiteText}>Hover over each department to see how the PRAMS platform affects your business.</Typography>
            <img src={logoOil} alt="..." className={classes.PPlogo} />
        </CardContent>
    </Card>
  );
}
