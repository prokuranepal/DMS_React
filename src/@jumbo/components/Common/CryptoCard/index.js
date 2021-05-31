import React from 'react';
import Box from '@material-ui/core/Box';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardHeaderRoot: {
    paddingTop: 16,
    paddingBottom: 16,
  },
  titleRoot: {
    fontSize: 12,
    marginBottom: 2,
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightBold,
  },
  iconRoot: {
    fontSize: 14,
    display: 'block',
    marginTop: 4,
  },
}));

const CryptoCard = ({ title, amount, progress, children }) => {
  const classes = useStyles();

  const headerSubTitle = () => (
    <Box display="flex" flexDirection="row" alignItems="center">
      <Box fontWeight="fontWeightBold" fontSize={20}>
        {amount}
      </Box>
      <Box ml={2} fontSize={16} color={progress.color} display="flex" flexDirection="row" alignItems="center">
        <Box component="span" mr={1}>
          {progress.value}
        </Box>
        {parseFloat(progress.value) > 0 ? (
          <ExpandLessIcon className={classes.iconRoot} />
        ) : (
          <ExpandMoreIcon className={classes.iconRoot} />
        )}
      </Box>
    </Box>
  );

  return (
    <CmtCard>
      <CmtCardHeader
        className={classes.cardHeaderRoot}
        titleProps={{
          variant: 'h6',
          component: 'div',
          className: classes.titleRoot,
        }}
        title={title}
        subTitle={headerSubTitle()}
      />
      {children}
    </CmtCard>
  );
};

export default CryptoCard;
