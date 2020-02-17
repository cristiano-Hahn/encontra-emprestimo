import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/styles';
import { useMediaQuery, Grid } from '@material-ui/core';

import {Topbar, Footer } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56,
    height: '100%',
    [theme.breakpoints.up('sm')]: {
      paddingTop: 64
    }
  },
  shiftContent: {
  },
  content: {
    height: '100%',
    maxWidth: '1100px'
  }
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true
  });

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop
      })}
    >
      <Topbar/>
      <Grid container justify='center' alignItems='center'>
        <main className={classes.content}>
          {children}
          <Footer />
        </main>
      </Grid>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
