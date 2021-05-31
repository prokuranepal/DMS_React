import React, { useRef, useState } from 'react';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import { Box, Button, Chip, Divider, Fade, TextField, Typography } from '@material-ui/core';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import PersonOutlinedIcon from '@material-ui/icons/PersonOutlined';
import { makeStyles } from '@material-ui/styles';
import AppTextInput from '../formElements/AppTextInput';

const useStyles = makeStyles(theme => ({
  divider: {
    flex: 1,
  },
  noBorder: {
    '& fieldset': {
      border: 0,
    },
  },
  inputGroup: {
    position: 'relative',
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'stretch',
    width: '100%',
  },
  textField: {
    position: 'relative',
    flex: '1 1 auto',
    width: '1%',
    minWidth: 0,

    '&:not(:last-child) .MuiOutlinedInput-root': {
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
    },
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  inputGroupAppend: {
    marginRight: '-1px',
  },
  button: props => ({
    backgroundColor: props.linkCopy ? '#8DCD03' : '#6200EE',
    color: '#fff',
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    height: '100%',

    '&:hover': {
      backgroundColor: props.linkCopy ? '#8DCD03' : '#6200EE',
    },
  }),
  successMsg: {
    color: '#8DCD03',
  },
  userIcon: {
    marginBottom: 2,
    '& > svg': {
      color: '#8DCD03',
      height: 55,
      width: 55,
    },
  },
  iconBlock: {
    display: 'block',
  },
}));

const InviteFriendForm = () => {
  const linkStr = 'https://www.example.com/home/';
  const [linkCopy, setLinkCopy] = useState(false);
  const [invitations, setInvitations] = useState(['Chris Harris', 'Rob Williams', 'robbin@example.com']);
  const [invited, setInvited] = useState(false);
  const [username, setUsername] = useState('');
  const classes = useStyles({ linkCopy });

  const linkRef = useRef(null);

  const copyToClipboard = () => {
    linkRef.current.select();
    document.execCommand('copy');
    setLinkCopy(true);
    setTimeout(() => {
      setLinkCopy(false);
    }, 5000);
  };

  const handleChipDelete = item => {
    setInvitations(invitations.filter(chip => chip !== item));
  };

  const handleOnKeyDown = event => {
    if (event.key === 'Enter' && event.target.value) {
      event.target.value.split(',').map(value => {
        if (!invitations.some(item => item === value.trim()) && value.trim() !== '') {
          invitations.push(value.trim());
        }

        return value;
      });

      setInvitations([...invitations]);
      setUsername('');
    }
  };

  const sendInvitation = () => {
    setInvited(true);
    setInvitations([]);
    setUsername('');
  };

  const invitedSuccess = () => {
    return (
      <Box display="flex" flexDirection="column" alignItems="center" mb={4}>
        <Box className={classes.userIcon}>
          <PersonOutlinedIcon />
        </Box>
        <Box component="h4" mb={4}>
          Invitations Sent
        </Box>
        <Button variant="contained" color="primary" onClick={() => setInvited(false)}>
          Invite More
        </Button>
      </Box>
    );
  };

  return (
    <CmtCardContent>
      {invited ? (
        <Fade in={invited}>{invitedSuccess()}</Fade>
      ) : (
        <Fade in={!invited}>
          <Box mb={4}>
            <Box display="flex" flexWrap="wrap" border={1} borderColor="borderColor.main" borderRadius="borderRadius">
              {invitations.map((item, index) => (
                <Chip key={index} label={item} className={classes.chip} onDelete={() => handleChipDelete(item)} />
              ))}
              <AppTextInput
                fullWidth={false}
                variant="outlined"
                placeholder="Type name or email..."
                value={username}
                onChange={event => setUsername(event.target.value)}
                onKeyDown={handleOnKeyDown}
                className={classes.noBorder}
              />
            </Box>
            <Box my={4}>
              <Button color="primary" variant="contained" disabled={!invitations.length} onClick={sendInvitation}>
                Invite
              </Button>
            </Box>
            <Box display="flex" alignItems="center">
              <Box component="span" mr={2}>
                Or
              </Box>
              <Divider className={classes.divider} />
            </Box>
          </Box>
        </Fade>
      )}

      <Box>
        <Typography gutterBottom component="h6" variant="h6">
          Get link to share
        </Typography>
        <Box className={classes.inputGroup}>
          <TextField
            className={classes.textField}
            size="small"
            variant="outlined"
            value={linkStr}
            placeholder="Type name or email address..."
            inputProps={{ ref: linkRef }}
            onFocus={copyToClipboard}
            readOnly
          />
          <Box className={classes.inputGroupAppend}>
            <Button className={classes.button} onClick={copyToClipboard}>
              {linkCopy ? <CheckCircleIcon /> : <FileCopyIcon />}
            </Button>
          </Box>
        </Box>

        {linkCopy && (
          <Fade in={linkCopy}>
            <Box display="flex" alignItems="center" mt={2} className={classes.successMsg}>
              <Box component="span" mr={2}>
                <CheckCircleIcon className={classes.iconBlock} />
              </Box>
              <Typography>Link copied!</Typography>
            </Box>
          </Fade>
        )}
      </Box>
    </CmtCardContent>
  );
};

export default InviteFriendForm;
