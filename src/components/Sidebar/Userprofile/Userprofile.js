import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Image from './Image/Image';

const useStyles = makeStyles({
  root: {
    width: '100%',
    margin: '20px 18px', 
  },
});

const Userprofile = (props) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Image src='https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-05.jpg' />
            <Typography variant="subtitle1">
               Chauri Deurali Health Post
            </Typography>
            <Typography variant="subtitle2" display="block">
               Madan kundari, KavrePalanchok
            </Typography>
            {/* <Typography variant="caption" display="block">
               Ph: +977-980-xxx-xxxx
            </Typography>
            <Typography variant="caption" display="block">
               Email: example@gmail.com
            </Typography> */}

        </div>
    );
};

export default Userprofile;
