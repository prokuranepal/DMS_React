import React from 'react';
import { Box } from '@material-ui/core';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import useStyles from './index.style';

const getCarouselSetting = settings => {
  return {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    ...settings,
  };
};

const CmtCarousel = ({ data, dotSize, outline, color, activeColor, dotPosition, renderRow, settings, ...rest }) => {
  const carouselSettings = React.useMemo(() => getCarouselSetting(settings), [settings]);

  const classes = useStyles({
    dotSize,
    outline,
    color,
    activeColor,
  });
  return (
    <Box {...rest}>
      <Slider className={clsx(classes.sliderRoot, dotPosition, { outline: outline })} {...carouselSettings}>
        {data.map((item, index) => renderRow(item, index))}
      </Slider>
    </Box>
  );
};

export default CmtCarousel;

CmtCarousel.propTypes = {
  data: PropTypes.array.isRequired,
  outline: PropTypes.bool,
  color: PropTypes.string,
  activeColor: PropTypes.string,
  dotSize: PropTypes.number,
  dotPosition: PropTypes.oneOf(['top', 'top-left', 'top-right', 'bottom', 'bottom-left', 'bottom-right']),
  renderRow: PropTypes.func,
  settings: PropTypes.object,
};

CmtCarousel.defaultProps = {
  dotPosition: 'bottom',
  dotSize: 10,
  color: '#7c7c7c',
  activeColor: '#333333',
};
