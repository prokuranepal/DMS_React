import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
  root: {
    maxWidth: 200,
    marginBottom: 30,
    margin: 'auto'
  },
});

const ImsCard = props => {
  const classes = useStyles();

  return (
    <Link to={{pathname: '/admin/ims/medicinelist', aboutProps: {name: props.name}}} style={{textDecoration:'none', color: 'white'}}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.name}
          height="140"
          image={props.image}
          title={props.name}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h4">
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  )}

export default ImsCard;
