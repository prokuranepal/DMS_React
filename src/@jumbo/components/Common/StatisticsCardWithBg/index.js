import React from 'react';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCard from '../../../../@coremat/CmtCard';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(theme => ({
  cardRoot: {
    '& .Cmt-action-menu': {
      alignItems: 'flex-start',
    },
  },
  cardHeaderRoot: {
    paddingTop: 16,
    paddingBottom: 16,
    '& .Cmt-action-default-menu': {
      alignItems: 'flex-start',
      marginTop: 5,
    },
  },
  titleRoot: {
    fontSize: 24,
    marginBottom: 2,
    color: theme.palette.common.white,
    [theme.breakpoints.up('sm')]: {
      fontSize: 28,
    },
    [theme.breakpoints.up('lg')]: {
      fontSize: 32,
    },
  },
}));

const StatisticsCardWithBg = ({ title, subTitle, children, icon, ...rest }) => {
  const classes = useStyles();
  return (
    <CmtCard {...rest} className={classes.cardRoot}>
      <CmtCardHeader
        className={classes.cardHeaderRoot}
        titleProps={{
          variant: 'h1',
          component: 'div',
          className: classes.titleRoot,
        }}
        title={title}
        subTitle={subTitle}
        subTitleProps={{ style: { color: '#fff', fontSize: 16, marginTop: 0 } }}>
        {icon}
      </CmtCardHeader>
      {children}
    </CmtCard>
  );
};

export default StatisticsCardWithBg;
