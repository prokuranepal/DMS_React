import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    Image: {
      width: '75px',
      height: '75px',
      borderRadius: '100%'
    },
  });

export default Image = (props) => {
    const classes = useStyles();
    return <img className={classes.Image} src={props.src} alt="profile image" />
}
