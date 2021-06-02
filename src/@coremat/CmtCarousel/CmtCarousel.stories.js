import React from 'react';
import { array, boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtCarousel from './';
import DummyItem from '../CmtList/DummyItem';

const renderRow = item => {
  return <DummyItem key={'key-' + item} item={item} />;
};

export default {
  component: CmtCarousel,
  title: 'CmtCarousel',
  decorators: [withKnobs, withA11y],
};

const settings = {
  dots: true,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export const Default = () => (
  <CmtCarousel
    outline={boolean('outline', false)}
    color={text('color', 'green')}
    activeColor={text('activeColor', 'red')}
    dotSize={number('dotSize', 10)}
    style={{ width: 250 }}
    settings={settings}
    data={array('data', [1, 2, 3, 4, 5])}
    renderRow={renderRow}
  />
);

export const TopLeft = () => (
  <CmtCarousel
    settings={settings}
    style={{ width: 250 }}
    outline={boolean('outline', false)}
    dotSize={number('dotSize', 10)}
    dotPosition={text('dotPosition', 'top-left')}
    data={array('data', [1, 2, 3, 4, 5])}
    renderRow={renderRow}
  />
);

export const TopCenter = () => (
  <CmtCarousel
    settings={settings}
    outline={boolean('outline', false)}
    dotSize={number('dotSize', 10)}
    style={{ width: 250 }}
    dotPosition={text('dotPosition', 'top')}
    data={array('data', [1, 2, 3, 4, 5])}
    renderRow={renderRow}
  />
);

export const TopRight = () => (
  <CmtCarousel
    settings={settings}
    outline={boolean('outline', false)}
    dotSize={number('dotSize', 10)}
    style={{ width: 250 }}
    dotPosition={text('dotPosition', 'top-right')}
    data={array('data', [1, 2, 3, 4, 5])}
    renderRow={renderRow}
  />
);

export const BottomLeft = () => (
  <CmtCarousel
    settings={settings}
    outline={boolean('outline', false)}
    dotSize={number('dotSize', 10)}
    style={{ width: 250 }}
    dotPosition={text('dotPosition', 'bottom-left')}
    data={array('data', [1, 2, 3, 4, 5])}
    renderRow={renderRow}
  />
);

export const BottomRight = () => (
  <CmtCarousel
    settings={settings}
    outline={boolean('outline', false)}
    dotSize={number('dotSize', 10)}
    style={{ width: 250 }}
    dotPosition={text('dotPosition', 'bottom-right')}
    data={array('data', [1, 2, 3, 4, 5])}
    renderRow={renderRow}
  />
);
