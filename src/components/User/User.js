import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },

    layout: {
        height: '350px', 
        overflowY: 'scroll', 
        position: 'relative',
        paddingTop: '15px',
 
    },
    list: {
        color: '#0091D5',
        cursor: 'pointer'
    },
    edit: {
        color: '#ffaa1d'
    },
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: ' 0 10px  0  17px'
    },
    button: {
        backgroundColor: '#1C4E80',
        color: 'white'
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
           <div className={classes.header}>
                <Typography variant="h5"> 
                        <strong>{title}</strong>
                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    className={classes.button}
                    endIcon={<AddIcon/>}
                >
                     ADD USER
                </Button>
      
           </div>
            
          <div>
            <List >
              {generate(
                <ListItem divider = {true} autoFocus = {true}>
                  <ListItemText
                    primary="Single-line item" className = {classes.list}
                  />
                
                  <IconButton edge="end" aria-label="delete">
                      <EditIcon className = {classes.edit}  />
                    </IconButton>
                    <IconButton edge="end" aria-label="delete">
                      <DeleteIcon color = 'secondary' />
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
