import React from 'react';
import { boolean, object, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import CmtObjectSummary from './index';
import { Box } from '@material-ui/core';
import StarRateIcon from '@material-ui/icons/StarRate';
import Avatar from '@material-ui/core/Avatar';

export default {
  component: CmtObjectSummary,
  title: 'CmtObjectSummary',
  decorators: [withKnobs, withA11y],
};

export const Default = () => {
  return (
    <Box p={5}>
      <CmtObjectSummary
        avatar={<Avatar>JK</Avatar>}
        title={text('title', 'Jhanwarlal Kumawat')}
        subTitle={text('subTitle', 'Designer')}
        showItemBadge={boolean('showItemBadge', false)}
        anchorOrigin={object('anchorOrigin', {
          vertical: 'top',
          horizontal: 'right',
        })}
        avatarProps={{ variant: 'square' }}
        badgeProps={{ color: 'primary' }}
        badge="32"
        align={text('align', 'horizontal')}
      />
    </Box>
  );
};

export const Vertical = () => {
  return (
    <Box p={5}>
      <CmtObjectSummary
        avatar={<Avatar style={{ width: 80, height: 80, borderRadius: 25 }}>JK</Avatar>}
        title={text('title', 'Jhanwarlal Kumawat')}
        subTitle={text('subTitle', 'Designer')}
        showItemBadge={boolean('showItemBadge', false)}
        anchorOrigin={object('anchorOrigin', {
          vertical: 'bottom',
          horizontal: 'center',
        })}
        avatarProps={{ variant: 'square' }}
        badge={
          <React.Fragment>
            <StarRateIcon style={{ height: 18 }} />
            <Box pr={2}>4.5</Box>
          </React.Fragment>
        }
        align={text('align', 'vertical')}
      />
    </Box>
  );
};
