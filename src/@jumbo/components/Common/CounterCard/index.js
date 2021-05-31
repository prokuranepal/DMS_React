import React from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import CmtImage from '../../../../@coremat/CmtImage';
import CountUp from 'react-countup';
import makeStyles from '@material-ui/core/styles/makeStyles';
import clsx from 'clsx';

const useStyles = makeStyles(theme => ({
  containerRoot: {
    display: 'flex',
    alignItems: 'center',
  },
  containerRootCenter: {
    justifyContent: 'center',
    flexDirection: 'column',
    paddingTop: 16,
    paddingBottom: 16,
  },
  contentRoot: {
    position: 'relative',
  },
  contentRootCenter: {
    marginLeft: 0,
    marginTop: 13,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
  },
  titleRoot: {
    marginBottom: 2,
  },
}));

const CounterCard = ({
  icon,
  number,
  numberProps,
  label,
  labelProps,
  counterProps,
  color,
  gradientDirection,
  alignCenter,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <CmtCard gradientDirection={gradientDirection} {...rest}>
      <CmtCardContent>
        <Box
          className={clsx(classes.containerRoot, 'container', {
            [classes.containerRootCenter]: alignCenter,
          })}
          color={color}>
          {typeof icon === 'string' ? <CmtImage src={icon} alt={label} /> : icon}
          <Box
            ml={{ xs: 3, xl: 5 }}
            className={clsx(classes.contentRoot, 'content-wrapper', {
              [classes.contentRootCenter]: alignCenter,
            })}>
            <Box component="h3" fontSize={{ xs: 20, xl: 24 }} className={clsx(classes.titleRoot, 'title')} {...numberProps}>
              {typeof number === 'string' ? (
                number
              ) : (
                <CountUp start={0} end={number} useEasing={false} separator={','} {...counterProps} />
              )}
            </Box>
            <Box component="p" {...labelProps}>
              {label}
            </Box>
          </Box>
        </Box>
      </CmtCardContent>
    </CmtCard>
  );
};

CounterCard.prototype = {
  icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberProps: PropTypes.object,
  label: PropTypes.string,
  labelProps: PropTypes.object,
  counterProps: PropTypes.object,
  color: PropTypes.string,
  gradientDirection: PropTypes.string,
  alignCenter: PropTypes.bool,
};

CounterCard.defaultProps = {
  color: 'common.white',
  gradientDirection: '180deg',
  alignCenter: false,
};

export default CounterCard;
