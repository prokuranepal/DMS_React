import React from 'react';
import PropTypes from 'prop-types';
import { Box, makeStyles } from '@material-ui/core';
import { getBackgroundStyle, getSeparatorStyle } from '../CmtHelpers/JssHelper';
import clsx from 'clsx';

const useStyles = makeStyles(() => ({
  footerRoot: props => ({
    ...props.separatorStyles,
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 24,
  }),
}));

const CmtCardFooter = ({ backgroundColor, gradientDirection, separator, children }) => {
  const backgroundStyles = getBackgroundStyle(backgroundColor, null, gradientDirection);
  const separatorStyles = getSeparatorStyle(separator, true);

  const classes = useStyles({ separatorStyles });

  return (
    <Box className={clsx(classes.footerRoot, 'Cmtfooter-root')} style={backgroundStyles}>
      {children}
    </Box>
  );
};

CmtCardFooter.propTypes = {
  backgroundColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  gradientDirection: PropTypes.string,
  separator: PropTypes.object,
};

CmtCardFooter.defaultProps = {
  separator: { color: '', borderWidth: 0, borderStyle: 'solid' },
};

export default CmtCardFooter;
