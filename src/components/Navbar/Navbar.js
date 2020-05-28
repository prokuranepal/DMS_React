import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    height: '60px',
  },
  logoSection: {
    width: '260px',
    color: '#fff',
    textAlign: 'center',
    backgroundColor: '#1C4E80'
  },
  newsSection: {
    display: 'flex',
    fontSize: '24px',
    width: '100%',
    backgroundColor: '#B2DBDF',
    justifyContent: 'center',
    alignItems: 'center',
  },

}));

const Topbar = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <div className={classes.logoSection}>
            <h3>Logo</h3>
        </div>
        <div className={classes.newsSection}>
            <marquee>News</marquee>
        </div>
    </div>
  );
}

export default Topbar;