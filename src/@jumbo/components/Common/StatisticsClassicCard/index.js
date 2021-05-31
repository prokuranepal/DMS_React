import React from 'react';
import CmtAdvCard from '../../../../@coremat/CmtAdvCard';
import CmtAdvCardContent from '../../../../@coremat/CmtAdvCard/CmtAdvCardContent';
import Box from '@material-ui/core/Box';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  advCard: {
    borderTop: props => `solid 4px ${props.color}`,
  },
  titleRoot: {
    marginBottom: 10,
    [theme.breakpoints.up('lg')]: {
      fontSize: 24,
    },
  },
  subTitleRoot: {
    fontSize: 16,
    color: theme.palette.common.black,
    letterSpacing: 0.15,
  },
  dots: {
    height: 8,
    width: 8,
    borderRadius: '50%',
    boxShadow: '0px 2px 4px rgba(68, 68, 79, 0.15)',
  },
  iconSm: {
    fontSize: 18,
  },
}));

const StatisticsClassicCard = ({ title, subTitle, growth, color, labels, children, ...rest }) => {
  const classes = useStyles({ color });
  return (
    <CmtAdvCard className={classes.advCard} {...rest}>
      <CmtAdvCardContent alignCenter>
        {children}

        <Box display="flex" mt={2}>
          <Box>
            <Typography component="div" variant="h1" className={classes.titleRoot} style={{ color: color }}>
              {title}
            </Typography>
            <Box className={classes.subTitleRoot}>{subTitle}</Box>
          </Box>
          <Box ml="auto">
            <Box display="flex" alignItems="center" justifyContent="flex-end" color={growth > 0 ? 'green' : 'red'}>
              <Box>{Math.abs(growth)}%</Box>
              <Box ml={1}>
                {growth > 0 ? (
                  <TrendingUpIcon className={classes.iconSm} />
                ) : (
                  <TrendingDownIcon className={classes.iconSm} />
                )}
              </Box>
            </Box>
            {labels && labels.length > 0 && (
              <Box mt={1} display="flex" alignItems="center" flexWrap="wrap" justifyContent="center">
                {labels.map((item, index) => (
                  <Box key={index} ml={2} mb={1} display="flex" alignItems="center">
                    <Box
                      mr={2}
                      component="span"
                      className={classes.dots}
                      style={{
                        backgroundColor: item.color,
                      }}
                    />
                    <Box component="span" fontSize={12} color="common.dark">
                      {item.name}
                    </Box>
                  </Box>
                ))}
              </Box>
            )}
          </Box>
        </Box>
      </CmtAdvCardContent>
    </CmtAdvCard>
  );
};

export default StatisticsClassicCard;
