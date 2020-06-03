import React, {Fragment} from 'react';
import {Link} from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import AddIcon from '@material-ui/icons/Add';
import Paper from '@material-ui/core/Paper'
import Button from '@material-ui/core/Button';
import Modal from '../UI/Modal/Modal';
import { v4 as uuidv4 } from 'uuid';


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
        marginTop: '30px'
 
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




const User = ({title, users}) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };


    return (
        <Paper className = {classes.layout} >
           <div className={classes.header}>
                <Typography variant="h5"> 
                        <strong>{title}</strong>
                </Typography>

                <Link to = "/create-user">
                  <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<AddIcon/>}
                  >
                    ADD USER
        
                  </Button>
                </Link>
                
           </div>
           {
             
             users.map((user) => (
               <Fragment>

              
                <ListItem divider = {true} autoFocus = {true} key ={uuidv4()}>

                  <ListItemText 
                    primary={user.username} className = {classes.list} key ={uuidv4()}
                  />
                
                <Link to= {{
                  pathname: 'edit-user',
                  state: {
                    user: user
                  }
                }}>
                    <IconButton edge="end" aria-label="edit" >
                      <EditIcon className = {classes.edit}  />
                    </IconButton>
                </Link>

                
                  <IconButton edge="end" aria-label="delete" onClick={handleClickOpen} key ={uuidv4()}>
                      <DeleteIcon color = 'secondary'  />
                      
                    </IconButton>
                </ListItem>
                    <Modal open={open} onClose={handleClose} user= {user} key={uuidv4()} />

                    </Fragment>
             ))

           }
            
        </Paper>
    )
}

User.propTypes = {

}

export default User
