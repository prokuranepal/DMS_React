import React from 'react';
import Box from '@material-ui/core/Box';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import CmtImage from '../../../../@coremat/CmtImage';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Link } from '@material-ui/core';

const apps = [
  {
    label: 'Andrioid App',
    imageURL: '/images/dashboard/google_play_store.png',
    link: 'http://play.store.com',
  },
  {
    label: 'IOS App',
    imageURL: '/images/dashboard/apple_play_store.png',
    link: 'http://play.store.com',
  },
];

const useStyles = makeStyles(theme => ({
  cardRoot: {
    color: theme.palette.common.white,
    padding: 16,
  },
  titleRoot: {
    fontSize: 10,
    letterSpacing: 1.5,
    marginBottom: 7,
    textTransform: 'uppercase',
  },
  subTitleRoot: {
    fontSize: 20,
    marginBottom: 10,
  },
}));

const DownloadApps = () => {
  const classes = useStyles();
  return (
    <CmtAdvCard
      className={classes.cardRoot}
      backgroundColor={['#03DAC5 -18.96%', '#6200EE 108.17%']}
      gradientDirection="180deg">
      <CmtAdvCardContent
        title="Download Mobile Apps"
        titleProps={{
          variant: 'body1',
          component: 'div',
          className: classes.titleRoot,
        }}
        subTitle="Now, your account is on your fingers"
        subTitleProps={{
          variant: 'h1',
          component: 'div',
          className: classes.subTitleRoot,
        }}
        extraContent={
          <Box mt={5} mx={-2} display="flex" alignItems="center">
            {apps.map((app, index) => (
              <Box px={2} key={index}>
                <Link href={app.link}>
                  <CmtImage src={app.imageURL} />
                </Link>
              </Box>
            ))}
          </Box>
        }
        alignCenter
      />
    </CmtAdvCard>
  );
};

export default DownloadApps;
