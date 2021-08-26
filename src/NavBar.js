import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {NavLink} from 'react-router-dom'

import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <EcoIcon />
            <EcoIcon />
            <EcoIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            MARY JANE'S DATABASE
          </Typography>
          <Button component={NavLink} to='/strains' color="inherit">HOME</Button>
          <Button component={NavLink} to='/addnewstrain' color="inherit">ADD STRAIN</Button>
          <Button component={NavLink} to='/medical_use' color="inherit">Medicinal Use</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}