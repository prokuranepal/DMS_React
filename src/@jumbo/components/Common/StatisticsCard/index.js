import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
  cardHeader: {
    padding: 16,
  },
  cardBody: {
    position: 'relative',
  },
  cardContent: {
    padding: 16,
    position: 'absolute',
    left: 0,
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  chartTitle: {
    marginBottom: 6,
  },
  chartSubTitle: {
    fontWeight: theme.typography.fontWeightRegular,
    textTransform: 'capitalize',
  },
}));

const StatisticsCard = ({ backgroundColor, title, titleProps, amount, description, children, ...rest }) => {
  const classes = useStyles();
  return (
    <CmtAdvCard backgroundColor={backgroundColor} {...rest}>
      <CmtCardHeader className={classes.cardHeader} title={title} titleProps={titleProps} />
      <Box className={classes.cardBody}>
        <CmtAdvCardContent
          className={classes.cardContent}
          title={amount}
          titleProps={{
            variant: 'h1',
            component: 'div',
            className: classes.chartTitle,
          }}
          subTitle={description}
          subTitleProps={{
            className: classes.chartSubTitle,
          }}
          columnSizes={[12, 0]}
        />
        {children}
      </Box>
    </CmtAdvCard>
  );
};

export default StatisticsCard;
