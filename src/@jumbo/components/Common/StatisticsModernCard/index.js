import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';

const useStyles = makeStyles(theme => ({
  cardContentRoot: {
    '& .MuiGrid-container': {
      alignItems: 'center',
    },
  },
  titleRoot: {
    fontSize: 24,
    marginBottom: 3,
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
    },
  },
  subTitleRoot: {
    fontSize: 16,
  },
}));

const StatisticsModernCard = ({ titleIcon, title, subTitle, children, ...rest }) => {
  const classes = useStyles();
  return (
    <CmtAdvCard {...rest}>
      <CmtCardHeader title={titleIcon} />
      <CmtAdvCardContent
        className={classes.cardContentRoot}
        title={title}
        titleProps={{
          variant: 'h1',
          component: 'div',
          style: { color: '#fff' },
          className: classes.titleRoot,
        }}
        subTitle={subTitle}
        subTitleProps={{
          variant: 'body2',
          component: 'p',
          style: { color: '#fff' },
          className: classes.subTitleRoot,
        }}
        columnSizes={[7, 5]}
        reverseDir>
        {children}
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default StatisticsModernCard;
