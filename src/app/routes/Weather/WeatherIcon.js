import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import Rainy from '../../../assets/rainy.png';
import Windy from '../../../assets/windy.png';
import Shower from '../../../assets/shower.png';
import Sunny from '../../../assets/sunny.png';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    cardMedia: {
      height: 150
    }
  }),
);




const WeatherIcon = (props) => {
  const classes = useStyles();
  // let image = null;
  // switch (props.image) {
  //     case "10n":
  //         image = Rainy;
  //         break;
  //     default:
  //         return null
  // }
  

  return (
    // <CardMedia
    //     className={classes.cardMedia}
    //     image={image}
    //     title={props.image}
    //     component="img"
    // />
    // <i className={"text-black jr-fs-xl wi wi-owm-" + iconId}/>
    <i className={"detail-icon wi wi-owm-" + props.iconId} />
  )
}
export default WeatherIcon;