import React from 'react';
import Box from '@material-ui/core/Box';
import { darken, makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import CachedIcon from '@material-ui/icons/Cached';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    padding: '32px 10px 5px',
    width: '100%',
    '& .MuiAlert-root': {
      padding: '0 20px 0 0',
      alignItems: 'center',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      '& .MuiAlert-icon': {
        padding: '16px 12px',
        borderTopLeftRadius: theme.shape.borderRadius,
        borderBottomLeftRadius: theme.shape.borderRadius,
        backgroundColor: darken(theme.palette.primary.main, 0.38),
      },
    },
  },
}));

const Alerts = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <Box className={classes.root}>
      <Collapse in={open}>
        <Alert
          variant="filled"
          iconMapping={{ success: <CachedIcon fontSize="inherit" /> }}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}>
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }>
          A new version has been arrived, Click here to update jumbo 5.0
        </Alert>
      </Collapse>
    </Box>
  );
};

export default Alerts;
