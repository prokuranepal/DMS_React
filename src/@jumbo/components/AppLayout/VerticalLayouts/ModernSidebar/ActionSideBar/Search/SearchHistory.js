import React from 'react';
import { Box, Chip, makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  sectionHeading: {
    fontSize: 10,
    color: theme.palette.text.secondary,
    marginBottom: 20,
    textTransform: 'uppercase',
  },
  chipRoot: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > .MuiChip-root': {
      marginBottom: 12,
      '&:not(:last-child)': {
        marginRight: 12,
      },
    },
  },
}));

const SearchHistory = ({ keywords, setKeywords }) => {
  const classes = useStyles();

  const handleDelete = keyword => {
    setKeywords(keywords.filter(option => option !== keyword));
  };

  return (
    <Box mb={7}>
      <Box className={classes.sectionHeading}>History</Box>
      <Box className={classes.chipRoot}>
        {keywords.map((keyword, index) => (
          <Chip key={index} label={keyword} onDelete={() => handleDelete(keyword)} />
        ))}
      </Box>
    </Box>
  );
};

export default SearchHistory;
