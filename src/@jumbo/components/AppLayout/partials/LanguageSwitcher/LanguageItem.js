import React from 'react';
import Box from '@material-ui/core/Box';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { fade } from '@material-ui/core';
import clsx from 'clsx';
import CmtImage from '../../../../../@coremat/CmtImage';
import { flags } from './data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    padding: '12px 24px',
    '& .flag': {
      fontSize: 30,
    },
    '&:hover': {
      backgroundColor: fade(theme.palette.primary.main, 0.08),
    },
  },
}));

const LanguageItem = ({ language, onClick }) => {
  const { locale, name } = language;
  const classes = useStyles();
  return (
    <Box className={clsx(classes.root, 'pointer')} onClick={() => onClick(language)}>
      <CmtImage src={flags[locale]} />
      <Box ml={3}>{name}</Box>
    </Box>
  );
};

export default LanguageItem;
