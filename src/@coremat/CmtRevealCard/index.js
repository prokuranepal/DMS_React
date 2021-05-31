import React, { createRef, useEffect, useState } from 'react';
import CmtCard from '../CmtCard';
import { Box, makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import CloseIcon from '@material-ui/icons/Close';
import IconButton from '@material-ui/core/IconButton';
import PropTypes from 'prop-types';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { CmtTitle } from '../CmtTypography';
import RevealEffect from '../CmtTransitions/RevealEffect';

const useStyles = makeStyles(theme => ({
  revealHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
    '& + .Cmt-card-content': {
      paddingTop: 0,
    },
  },
  revealArea: {
    backgroundColor: theme.palette.background.paper,
    position: 'absolute',
    overflowY: 'auto',
    left: 0,
    top: '100%',
    width: '100%',
    height: '100%',
    zIndex: 3,
    boxSizing: 'border-box',
  },
}));

const CmtRevealCard = ({ revealed, onClose, revealComponentTitle, titleProps, revealComponent, children, ...rest }) => {
  const classes = useStyles();
  const contentRef = createRef();
  const [contentHeight, setContentHeight] = useState(0);

  const windowReSized = () => {
    if (contentRef.current) setContentHeight(contentRef.current.clientHeight);
  };

  useEffect(() => {
    windowReSized();
  }, [revealed]);

  return (
    <CmtCard {...rest}>
      <Box width="100%" ref={contentRef}>
        {children}
      </Box>
      <RevealEffect in={revealed}>
        <Box className={clsx(classes.revealArea)}>
          <PerfectScrollbar style={{ height: contentHeight }}>
            <Box className={classes.revealHeader}>
              <Box flex={1}>{revealComponentTitle && <CmtTitle content={revealComponentTitle} {...titleProps} />}</Box>
              <Box my={-3}>
                <IconButton onClick={onClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </Box>
            {revealComponent}
          </PerfectScrollbar>
        </Box>
      </RevealEffect>
    </CmtCard>
  );
};

CmtRevealCard.propTypes = {
  revealed: PropTypes.bool,
  onClose: PropTypes.func,
  revealComponentTitle: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  titleProps: PropTypes.object,
  revealComponent: PropTypes.element,
};

CmtRevealCard.defaultProps = {
  revealed: false,
  revealComponentTitle: '',
  titleProps: {
    variant: 'h2',
    component: 'div',
  },
};

export default CmtRevealCard;
