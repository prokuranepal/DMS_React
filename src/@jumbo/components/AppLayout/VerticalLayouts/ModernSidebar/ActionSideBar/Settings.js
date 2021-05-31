import React, { useState } from 'react';
import { Box, Divider, makeStyles } from '@material-ui/core';
import AppSwitch from '../../../../Common/formElements/AppSwitch';

const useStyles = makeStyles(theme => ({
  sectionRoot: {
    '&:not(:last-child)': {
      marginBottom: 28,
    },
  },
  sectionHeading: {
    fontSize: 10,
    color: theme.palette.text.secondary,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  labelProps: {
    color: theme.palette.text.primary,
    cursor: 'pointer',
  },
}));

const Settings = () => {
  const classes = useStyles();
  const [emailNotification, setEmailNotification] = useState(true);
  const [smsNotification, setSMSNotification] = useState(true);
  const [logEveryday, setLogEveryday] = useState(true);
  const [cloudStorage, setCloudStorage] = useState(true);
  const [doubleFactorAuth, setEDoubleFactorAuth] = useState(false);

  return (
    <Box>
      <Box fontSize={22} fontWeight={700} mb={9}>
        Settings
      </Box>
      <Box className={classes.sectionRoot}>
        <Box className={classes.sectionHeading}>Notification Settings</Box>
        <Box pb={6}>
          <AppSwitch
            label="Email Notification"
            labelProps={{ className: classes.labelProps }}
            helperText="help@g-axon.com"
            checked={emailNotification}
            onChange={event => setEmailNotification(event.target.checked)}
          />
        </Box>
        <Divider />
        <Box pt={3} pb={6}>
          <AppSwitch
            label="SMS Notifications"
            labelProps={{ className: classes.labelProps }}
            helperText="+91 957 858 9855, +91 358 788 596"
            checked={smsNotification}
            onChange={event => setSMSNotification(event.target.checked)}
          />
        </Box>
        <Divider />
      </Box>
      <Box className={classes.sectionRoot}>
        <Box className={classes.sectionHeading}>System Settings</Box>
        <Box pb={6}>
          <AppSwitch
            label="Upload log everyday"
            labelProps={{ className: classes.labelProps }}
            helperText="This will upload activity log to server everyday"
            checked={logEveryday}
            onChange={event => setLogEveryday(event.target.checked)}
          />
        </Box>
        <Divider />
        <Box pt={3} pb={6}>
          <AppSwitch
            label="Cloud Storage"
            labelProps={{ className: classes.labelProps }}
            helperText="25gb / 1tb is used "
            checked={cloudStorage}
            onChange={event => setCloudStorage(event.target.checked)}
          />
        </Box>
        <Divider />
        <Box pt={3} pb={6}>
          <AppSwitch
            label="2 Factor Authentication"
            labelProps={{ className: classes.labelProps }}
            helperText="Set-up your 2 factor authentication now."
            checked={doubleFactorAuth}
            onChange={event => setEDoubleFactorAuth(event.target.checked)}
          />
        </Box>
        <Divider />
      </Box>
    </Box>
  );
};

export default Settings;
