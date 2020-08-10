import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Image from './Image/Images';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
   root: {
      width: '100%',
   },
   image: {
      paddingLeft: '20px',
      paddingTop: '10px'
   },
   text: {
      paddingLeft: '10px'
   }
});

const Userprofile = (props) => {
   const classes = useStyles();
   return (
      <Box className={classes.root}>
         <Box className={classes.image}>
            <Image src='https://scriptly.org/wp-content/uploads/2016/06/opulent-profile-square-05.jpg' />
            </Box>
            <Box className={classes.text}>
            <Typography variant="subtitle1">
               Chauri Deurali Health Post
            </Typography>
            </Box>
         {/* <Typography variant="caption" display="block">
               Ph: +977-980-xxx-xxxx
            </Typography>
            <Typography variant="caption" display="block">
               Email: example@gmail.com
            </Typography> */}
      </Box>
   );
};

export default Userprofile;
