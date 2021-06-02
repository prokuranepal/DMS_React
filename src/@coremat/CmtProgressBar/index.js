import React, { useEffect, useMemo, useState } from 'react';
import { Box } from '@material-ui/core';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './index.style';

const CmtProgressBar = ({
  label,
  labelPos,
  valuePos,
  value,
  total,
  renderValue,
  containedColor,
  hideValue,
  gradientDirection,
  onlyContained,
  emptyColor,
  thickness,
  pointer,
  pointerSize,
  ...restProps
}) => {
  const [valCounter, setValCounter] = useState(0);
  const [barPctWidth, setBarPctWidth] = useState(0);
  const valPositionTop = ['top-left', 'top-right', 'top-center'].some(position => position === valuePos);
  const valPositionBottom = ['bottom-left', 'bottom-right', 'bottom-center'].some(position => position === valuePos);
  const labelPositionTop = ['top-left', 'top-right', 'top-center'].some(position => position === labelPos);
  const labelPositionBottom = ['bottom-left', 'bottom-right', 'bottom-center'].some(position => position === labelPos);
  const [pointerColor, setPointerColor] = useState(containedColor.toString());
  const totalColors = useMemo(() => containedColor.length, [containedColor]);

  const [fillBarStyle, setFillBarStyle] = useState({
    width: `${Math.round(barPctWidth)}%`,
    backgroundColor: containedColor.toString(),
  });

  useEffect(() => {
    setValCounter(value);
    setBarPctWidth((value * 100) / total);
  }, [value, total]);

  useEffect(() => {
    if (Array.isArray(containedColor) && totalColors > 0) {
      if (gradientDirection && containedColor.length === 1) {
        const [firstColor] = containedColor[0].split(' ');
        setFillBarStyle({
          width: `${Math.round(barPctWidth)}%`,
          backgroundColor: firstColor,
        });
        setPointerColor(firstColor);
      } else {
        const [firstColor] = containedColor[0].split(' ');
        const [lastColor] = containedColor[containedColor.length - 1].split(' ');
        setFillBarStyle({
          width: `${Math.round(barPctWidth)}%`,
          backgroundColor: firstColor,
          backgroundImage: `linear-gradient(${gradientDirection}, ${containedColor.join(', ')})`,
        });
        setPointerColor(lastColor);
      }
    } else {
      setFillBarStyle({
        width: `${Math.round(barPctWidth)}%`,
        backgroundColor: containedColor,
      });
      setPointerColor(containedColor);
    }
  }, [value, total, containedColor, totalColors, barPctWidth]);

  const classes = useStyles({
    thickness,
    pointer,
    pointerColor,
    pointerSize,
    valuePos,
  });

  const renderContent = (component = 'span') => {
    return hideValue ? null : (
      <Box
        component={component}
        ml={valuePos === 'right' ? 2 : 0}
        mr={valuePos === 'left' ? 2 : 0}
        className={clsx(classes.textContainer, 'Cmt-text-container', {
          [classes.textContainerRight]: valuePos === 'top-right' || valuePos === 'bottom-right',
          [classes.textContainerCenter]: valuePos === 'top-center' || valuePos === 'bottom-center',
        })}>
        {(renderValue && renderValue(valCounter, total)) || valCounter}
      </Box>
    );
  };

  const renderLabel = () => {
    return label ? (
      <Box
        ml={labelPos === 'right' ? 2 : 0}
        mr={labelPos === 'left' ? 2 : 0}
        className={clsx(classes.labelContainer, 'Cmt-label-container', {
          [classes.labelContainerRight]: labelPos === 'top-right' || labelPos === 'bottom-right',
          [classes.labelContainerCenter]: labelPos === 'top-center' || labelPos === 'bottom-center',
        })}>
        {label}
      </Box>
    ) : null;
  };

  return (
    <Box className={clsx(classes.root, 'CmtProgressBar-root')} {...restProps}>
      {labelPositionTop && <Box mb={2}>{renderLabel()}</Box>}
      {valPositionTop && <Box mb={2}>{renderContent('div')}</Box>}

      <Box className={classes.flexRoot}>
        {labelPos === 'left' && renderLabel()}
        {valuePos === 'left' && renderContent()}

        {onlyContained ? (
          <Box className={clsx(classes.fillStyle, 'Cmt-fill-progress')} style={fillBarStyle} />
        ) : (
          <Box flex={1} className={classes.barContainer} style={{ backgroundColor: emptyColor }}>
            <Box className={clsx(classes.fillStyle, 'Cmt-fill-progress')} style={fillBarStyle} />
          </Box>
        )}

        {valuePos === 'right' && renderContent()}
        {labelPos === 'right' && renderLabel()}
      </Box>

      {valPositionBottom && <Box mt={2}>{renderContent('div')}</Box>}
      {labelPositionBottom && <Box mt={2}>{renderLabel()}</Box>}
    </Box>
  );
};

const positions = ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center', 'left', 'right'];

CmtProgressBar.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  labelPos: PropTypes.oneOf(positions),
  total: PropTypes.number,
  value: PropTypes.number.isRequired,
  valuePos: PropTypes.oneOf(positions),
  renderValue: PropTypes.func,
  containedColor: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  emptyColor: PropTypes.string,
  thickness: PropTypes.number,
  pointer: PropTypes.bool,
  pointerSize: PropTypes.number,
  onlyContained: PropTypes.bool,
  hideValue: PropTypes.bool,
  gradientDirection: PropTypes.string,
};

CmtProgressBar.defaultProps = {
  labelPos: 'top-left',
  total: 100,
  valuePos: 'right',
  containedColor: '#1a90ff',
  gradientDirection: 'to right',
  emptyColor: '#e9ecef',
  thickness: 4,
  pointer: false,
  pointerSize: 8,
  onlyContained: false,
  hideValue: false,
};

export default React.memo(CmtProgressBar);
