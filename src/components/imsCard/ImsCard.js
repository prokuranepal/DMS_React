import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    background: '#fff',
    borderRadius: '2px',
    display: 'inline-block',
    height: '130px',
    position: 'relative',
    width: '200px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  title: {
    fontSize: 18,
  }
});

const  ImsCard = (props) => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} color="textPrimary" gutterBottom>
          {props.title}
        </Typography>
        <Typography variant="body2" component="p">
          {props.name}
        </Typography>
      </CardContent>
      <CardActions >
        <Button size="small">Details</Button>
      </CardActions>
    </Card>
  );
};

export default ImsCard;
