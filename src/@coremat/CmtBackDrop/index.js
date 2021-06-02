import React, { cloneElement, createRef, isValidElement, useEffect, useState } from 'react';
import { Box } from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import CmtCard from '../CmtCard';
import PerfectScrollbar from 'react-perfect-scrollbar';
import 'react-perfect-scrollbar/dist/css/styles.css';
import useStyles from './CmtBackDrop.style';
import SlideHeight from '../CmtTransitions/SlideHeight';

const CmtBackDrop = ({
  concealedIcon,
  backLayerConcealed,
  backLayerRevealed,
  extrasContainer,
  headerSize,
  subHeader,
  onRevealed,
  children,
  ...rest
}) => {
  const classes = useStyles({ headerSize });
  const [revealed, setRevealed] = useState(false);
  const backLayerContentRef = createRef();
  const frontLayerRef = createRef();
  const [backLayerContentHeight, getBackLayerContentHeight] = useState(0);
  const [frontLayerHeight, getFrontLayerHeight] = useState(0);
  const [expandableValue, setExpandableValue] = useState(headerSize);

  const setHeight = () => {
    if (backLayerContentRef.current) getBackLayerContentHeight(backLayerContentRef.current.clientHeight);
    if (frontLayerRef.current) getFrontLayerHeight(frontLayerRef.current.clientHeight);
  };

  useEffect(() => {
    setHeight();
    if (onRevealed) onRevealed(revealed);
  }, [revealed]);

  /**
   * Set Front Layer height
   */
  const setFrontLayerHeight = () => {
    if (revealed && backLayerContentHeight > 0) {
      if (backLayerContentHeight + headerSize > frontLayerHeight) {
        setExpandableValue(frontLayerHeight);
      } else {
        setExpandableValue(backLayerContentHeight + headerSize);
      }
    } else {
      setExpandableValue(headerSize);
    }
  };

  useEffect(() => {
    setFrontLayerHeight();
  }, [revealed, backLayerContentHeight, frontLayerHeight, headerSize]);

  const onConcealedClick = () => {
    setRevealed(!revealed);
  };
  const onRevealClose = () => {
    setRevealed(false);
  };

  const renderConcealedIcon = () => {
    if (concealedIcon && isValidElement(concealedIcon)) {
      return cloneElement(concealedIcon, {
        className: classes.iconBlock,
      });
    }

    return null;
  };

  const backLayerComponent = () => {
    return (
      <Box className={clsx(classes.backLayer, 'Cmt-BackDrop-backLayer')}>
        <Box className={clsx(classes.backLayerHeader, 'Cmt-BackDrop-backLayerHeader')}>
          <Box flex={1} display="flex" alignItems="center" className="pointer" onClick={onConcealedClick}>
            <Box mr={4} className={classes.iconView}>
              {concealedIcon && !revealed && renderConcealedIcon()}

              {revealed && <CloseIcon className={classes.iconBlock} />}
            </Box>
            {typeof backLayerConcealed === 'string' ? (
              <Typography component="div" variant="h4">
                {backLayerConcealed}
              </Typography>
            ) : (
              backLayerConcealed
            )}
          </Box>
          <Box ml={3}>{extrasContainer}</Box>
        </Box>
        <PerfectScrollbar style={{ height: frontLayerHeight - headerSize - 20 }}>
          <Box ref={backLayerContentRef}>{backLayerRevealed}</Box>
        </PerfectScrollbar>
      </Box>
    );
  };

  const frontLayerComponent = () => {
    return (
      <SlideHeight in={revealed} slidableHeight={expandableValue}>
        <Box ref={frontLayerRef} className={clsx(classes.frontLayer, 'Cmt-BackDrop-frontLayer')}>
          {subHeader && (
            <Box
              className={clsx(classes.frontLayerSubHeader, 'Cmt-BackDrop-frontLayerSubHeader', { pointer: revealed })}
              onClick={onRevealClose}>
              <Box flex={1} mr={3}>
                {typeof subHeader === 'string' ? <Typography>{subHeader}</Typography> : subHeader}
              </Box>

              {revealed && <ExpandLessIcon className={classes.iconBlock} />}
            </Box>
          )}
          <Box>{children}</Box>
        </Box>
      </SlideHeight>
    );
  };

  return (
    <CmtCard className={clsx(classes.revealArea, 'Cmt-BackDrop')} {...rest}>
      {backLayerComponent()}
      {frontLayerComponent()}
    </CmtCard>
  );
};

CmtBackDrop.propTypes = {
  concealedIcon: PropTypes.element,
  backLayerConcealed: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  backLayerRevealed: PropTypes.element,
  extrasContainer: PropTypes.element,
  headerSize: PropTypes.number,
  subHeader: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  onRevealed: PropTypes.func,
};

CmtBackDrop.defaultProps = {
  concealedIcon: '',
  headerSize: 60,
  subHeader: '',
};

export default CmtBackDrop;
