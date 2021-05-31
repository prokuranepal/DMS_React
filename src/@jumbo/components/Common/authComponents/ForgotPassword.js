import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import IntlMessages from '../../../utils/IntlMessages';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@material-ui/core/Button';
import { Box, Collapse, fade, IconButton, Link } from '@material-ui/core';
import { AuhMethods } from '../../../../services/auth';
import ContentLoader from '../../ContentLoader';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtImage from '../../../../@coremat/CmtImage';
import Typography from '@material-ui/core/Typography';
import { CurrentAuthMethod } from '../../../constants/AppConstants';
import AuthWrapper from './AuthWrapper';
import { setForgetPassMailSent } from '../../../../redux/actions/Auth';
import { useHistory } from 'react-router-dom';
import { Alert } from '@material-ui/lab';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  authThumb: {
    backgroundColor: fade(theme.palette.primary.main, 0.12),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    [theme.breakpoints.up('md')]: {
      width: '50%',
      order: 2,
    },
  },
  authContent: {
    padding: 30,
    [theme.breakpoints.up('md')]: {
      order: 1,
      width: props => (props.variant === 'default' ? '50%' : '100%'),
    },
    [theme.breakpoints.up('xl')]: {
      padding: 50,
    },
  },
  titleRoot: {
    marginBottom: 14,
    color: theme.palette.text.primary,
  },
  textFieldRoot: {
    '& .MuiOutlinedInput-notchedOutline': {
      borderColor: fade(theme.palette.common.dark, 0.12),
    },
  },
  alertRoot: {
    marginBottom: 10,
  },
}));

//variant = 'default', 'standard', 'bgColor'
const ForgotPassword = ({ method = CurrentAuthMethod, variant = 'default', wrapperVariant = 'default' }) => {
  const { send_forget_password_email } = useSelector(({ auth }) => auth);
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = useState('demo@example.com');
  const dispatch = useDispatch();
  const classes = useStyles({ variant });
  const history = useHistory();

  useEffect(() => {
    if (send_forget_password_email) {
      setOpen(true);

      setTimeout(() => {
        dispatch(setForgetPassMailSent(false));
        history.push('/');
      }, 1500);
    }
  }, [send_forget_password_email]);

  const onSubmit = () => {
    dispatch(AuhMethods[method].onForgotPassword({ email }));
  };

  return (
    <AuthWrapper variant={wrapperVariant}>
      {variant === 'default' ? (
        <Box className={classes.authThumb}>
          <CmtImage src={'/images/auth/forgot-img.png'} />
        </Box>
      ) : null}
      <Box className={classes.authContent}>
        <Box mb={7}>
          <CmtImage src={'/images/logo.png'} />
        </Box>
        <Typography component="div" variant="h1" className={classes.titleRoot}>
          ForgotPassword
        </Typography>
        <Collapse in={open}>
          <Alert
            variant="outlined"
            severity="success"
            className={classes.alertRoot}
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
            A mail has been sent on your email address with reset password link.
          </Alert>
        </Collapse>
        <form>
          <Box mb={5}>
            <TextField
              label={<IntlMessages id="appModule.email" />}
              fullWidth
              onChange={event => setEmail(event.target.value)}
              defaultValue={email}
              margin="normal"
              variant="outlined"
              className={classes.textFieldRoot}
            />
          </Box>
          <Box mb={5}>
            <Button onClick={onSubmit} variant="contained" color="primary">
              <IntlMessages id="appModule.resetPassword" />
            </Button>
          </Box>

          <Box>
            <Typography>
              Don't remember your email?
              <Box component="span" ml={2}>
                <Link href="#">
                  <IntlMessages id="appModule.contactSupport" />
                </Link>
              </Box>
            </Typography>
          </Box>
        </form>
        <ContentLoader />
      </Box>
    </AuthWrapper>
  );
};

export default ForgotPassword;
