import React from 'react';
import Box from '@material-ui/core/Box';
import CmtCard from '../../../../@coremat/CmtCard';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => ({
  headerRoot: {
    paddingBottom: 8,
  },
}));

const GrowthCard = ({ growth, desc, children }) => {
  const classes = useStyles();

  return (
    <CmtCard>
      <CmtCardHeader
        className={classes.headerRoot}
        title={
          <Box component="h2" color={growth > 0 ? '#8DCD03' : '#E00930'}>
            {growth}% {growth > 0 ? <ArrowUpwardIcon fontSize="small" /> : <ArrowDownwardIcon fontSize="small" />}
          </Box>
        }
        subTitle={
          <Box component="p" mb={0} color="text.secondary" fontSize={12}>
            {desc}
          </Box>
        }
      />
      {children}
    </CmtCard>
  );
};

export default GrowthCard;
