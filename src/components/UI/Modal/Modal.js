import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

export default function Modal({open, onClose}) {
  
  return (
    <div>
      <Dialog open={open} onClose={onClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">DELETE USER</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the username of the user to delete
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="USERNAME"
            type="text"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color="secondary">
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