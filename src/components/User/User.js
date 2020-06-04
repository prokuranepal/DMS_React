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
        height: '360px', 
        overflowY: 'auto', 
        position: 'relative',
        marginTop: '25px'
 
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
        padding: ' 0.8rem  4rem',
        background: '#4597D6',
        color:'white'
    },
    button: {
        backgroundColor: '#EA6A47',
        textDecoration: 'none',
        color: 'white',
        padding: '0.5rem 1.6rem'
    },
    table: {
        padding: '0.3rem 4rem'
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
                <Typography variant="h4"> 
                        {title}
                </Typography>

                <Link to = "/create-user" style={{textDecoration: 'none'}}>
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

              
                <ListItem className= {classes.table} divider = {true} autoFocus = {true} key ={uuidv4()}>

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
                      <EditIcon  />
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
