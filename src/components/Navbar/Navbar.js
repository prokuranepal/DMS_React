import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  logoSection: {
    display: 'flex',
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#1C4E80',
    justifyContent: 'center',
    alignItems: 'center',
  },
  newsSection: {
    display: 'flex',
    fontSize: '24px',
    width: '100%',
    backgroundColor: '#1C4E80',
    justifyContent: 'center',
    alignItems: 'center',
    color: 'white'
  }

}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={2} className={classes.logoSection}>
        <Typography>Logo</Typography>
      </Grid>
      <Grid item xs={10} className={classes.newsSection}>
        <marquee>News</marquee>
      </Grid>
    </Grid>
  );
}

export default Topbar;