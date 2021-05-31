import React from 'react';
import { array, boolean, color, number, select, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtProgressBar from './';

export default {
  component: CmtProgressBar,
  title: 'Cmt Progress Bar',
  decorators: [withKnobs, withA11y],
};

export const Default = () => (
  <React.Fragment>
    <CmtProgressBar
      value={number('Progress 1 Value', 24)}
      total={70}
      renderValue={(value, total) => {
        return `${value} / ${total} - Default Color`;
      }}
      containedColor={color('Progress 1 Color', '#1a90ff')}
      onlyContained
      pointer
    />
    <CmtProgressBar
      value={number('Progress 2 value', 36)}
      total={70}
      renderValue={(value, total) => {
        return `${value} / ${total} - Progress Color`;
      }}
      containedColor={array('Progress 2 Colors', ['red', 'green', 'blue', 'yellow', 'purple'])}
      pointer
    />
    <CmtProgressBar
      value={number('Progress 3 Value', 56)}
      total={70}
      renderValue={(value, total) => {
        return `${value} / ${total} - Gradient Color`;
      }}
      containedColor={array('Progress 3 Colors', ['red', 'green', 'blue', 'yellow', 'purple'])}
      gradientDirection={'to right'}
      onlyContained
      pointer
    />
  </React.Fragment>
);

export const WithValuePosition = () => (
  <CmtProgressBar
    value={number('Value', 56)}
    total={number('Total', 90)}
    renderValue={(value, total) => {
      return `${value} / ${total}`;
    }}
    valuePos={select(
      'Value Position',
      ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center', 'left', 'right'],
      'left',
    )}
    hideValue={boolean('Hide Value', false)}
    containedColor={array('Colors', ['red', 'green', 'blue', 'yellow', 'purple'])}
    gradientDirection={text('Gradient Direction', 'to right')}
    onlyContained={boolean('Only Contained', true)}
    thickness={number('Thickness', 10)}
    pointer={boolean('Pointer', true)}
    pointerSize={number('Pointer Size', 15)}
  />
);

export const WithLabelPosition = () => (
  <CmtProgressBar
    label={<div>BTC | 8.75</div>}
    labelPos={select(
      'Label Position',
      ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center', 'left', 'right'],
      'top-left',
    )}
    value={number('Value', 56)}
    total={number('Total', 90)}
    renderValue={(value, total) => {
      return `${value} / ${total}`;
    }}
    valuePos={select(
      'Value Position',
      ['top-left', 'top-right', 'top-center', 'bottom-left', 'bottom-right', 'bottom-center', 'left', 'right'],
      'left',
    )}
    containedColor={array('Colors', ['red', 'green', 'blue', 'yellow', 'purple'])}
    gradientDirection={text('Gradient Direction', 'to right')}
    onlyContained={boolean('Only Contained', true)}
    thickness={number('Thickness', 10)}
    pointer={boolean('Pointer', true)}
    pointerSize={number('Pointer Size', 15)}
  />
);
