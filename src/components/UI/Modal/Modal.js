import React, {useState} from 'react';
import {deleteUser} from '../../../store/actions/users'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { connect } from 'react-redux';

const Modal = ({open, onClose, user, deleteUser}) => {
    
    
    
    const [username, setUsername] = useState('')

    const onChange = e => setUsername(e.target.value)
    
    const onSubmit = e => {
        e.preventDefault();
        
       
        if(user.username === username){
            deleteUser(user);
            onClose()

        }
    }

  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">DELETE USER</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the username of the user to delete
          </DialogContentText>
          <TextField
            onChange = {onChange}
            autoFocus
            margin="dense"
            id="name"
            label="USERNAME"
            type="text"
            value= {username}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
            
          <Button onClick={onSubmit} color="secondary">
            DELETE
          </Button>
          <Button onClick={onClose} color="primary">
            CANCEL
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default connect(null, {deleteUser})(Modal)