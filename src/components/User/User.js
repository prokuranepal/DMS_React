import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import Paper from '@material-ui/core/Paper'


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    layout: {
        height: '350px', 
        overflowY: 'scroll', 
        position: 'relative'
    },
    list: {
        color: '#0091D5',
        cursor: 'pointer'
    }

  }));

  function generate(element) {
    return [0, 1, 2, 3, 4, 5 , 6, 7,8,9,2,3,4,5,6].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

const User = ({title}) => {
    const classes = useStyles();

    return (
        <Paper className = {classes.layout} >
            <strong></strong>
            <Typography variant="h6"> &nbsp;&nbsp;&nbsp;
                 {title}
          </Typography>
          <div className={classes.demo}>
            <List >
              {generate(
                <ListItem divider = {true} autoFocus = {true}>
                  <ListItemText
                    primary="Single-line item" className = {classes.list}
                  />
                
                  <IconButton edge="end" aria-label="delete">
                      <EditIcon />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                    
        
                </ListItem>,
              )}
            </List>
          </div>
            
        </Paper>
    )
}

User.propTypes = {

}

export default User
