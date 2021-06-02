import React from 'react';
import { array, boolean, color, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';

import CmtAdvCard from './index';
import CmtCardHeader from '../CmtCard/CmtCardHeader';
import CmtAdvCardContent from './CmtAdvCardContent';
import CmtDropdownMenu from '../CmtDropdownMenu';
import Button from '@material-ui/core/Button';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';
import CloseIcon from '@material-ui/icons/Close';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import InfoIcon from '@material-ui/icons/Info';
import CmtImage from '../CmtImage';

export default {
  component: CmtAdvCard,
  title: 'CmtAdvCard',
  decorators: [withKnobs, withA11y],
  excludeStories: /.*Data$/,
};

const executeThis = () => {
  // show popup
};

const menuItemsData = [
  {
    icon: <AllInclusiveIcon />,
    label: 'All Inclusive',
  },
  {
    icon: <CloseIcon />,
    label: 'Close',
    onClick: executeThis,
  },
  {
    label: 'Create New',
  },
];

const handleItemClickData = item => {
  if (item.key === 'create') item.disabled = true;

  return item;
};

export const renderExtraData = () => {
  return (
    <CmtDropdownMenu
      TriggerComponent={
        <Button aria-controls="fade-menu" aria-haspopup="true">
          Open Menu
        </Button>
      }
      items={menuItemsData}
      onItemClick={handleItemClickData}
    />
  );
};

const actions = [
  {
    icon: <InfoIcon />,
    label: 'More Detail',
  },
  {
    icon: <CloseIcon />,
    label: 'Close',
  },
];

const image = 'https://via.placeholder.com/300x200/';

export const Default = () => (
  <CmtAdvCard>
    <CmtCardHeader
      title={text('Header Title', 'Complex Interaction')}
      subTitle={text('Header Sub Title', 'September 14, 2016')}
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      actions={actions}
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
    />
    <CmtAdvCardContent
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Content Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithExtraContent = () => (
  <CmtAdvCard>
    <CmtCardHeader
      title={text('Header Title', 'Top Visitors')}
      avatar={<Avatar>H</Avatar>}
      actions={actions}
      icon={<InfoIcon />}>
      <Button>View Demo</Button>
    </CmtCardHeader>
    <CmtAdvCardContent
      title={
        <h2>
          Some title<span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithActions = () => (
  <CmtAdvCard actions={array('Actions List', actions)} actionHandleIcon={<InfoIcon />} actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      reverseDir={boolean('Reverse Direction', true)}
      alignCenter={boolean('Align Center', true)}
      title={
        <h2>
          Some title<span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithBackgroundColor = () => (
  <CmtAdvCard
    backgroundColor={color('Background Color', '#f97d1b')}
    actions={array('Actions List', actions)}
    actionHandleIcon={<InfoIcon />}
    actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      title={
        <h2>
          Some title<span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithBackgroundImage = () => (
  <CmtAdvCard
    backgroundImage={text('Background Image', image)}
    actions={array('Actions List', actions)}
    actionHandleIcon={<InfoIcon />}
    actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      title={
        <h2>
          Some title<span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithGradientBackground = () => (
  <CmtAdvCard
    backgroundColor={array('Background Color', ['#f97d1b', 'green', 'red'])}
    gradientDirection={'to right'}
    actions={array('Actions List', actions)}
    actionHandleIcon={<InfoIcon />}
    actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      title={
        <h2>
          Some Title <span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithOverlay = () => (
  <CmtAdvCard
    backgroundColor={array('Background Color', ['#f97d1b', 'green', 'red'])}
    gradientDirection={'to right'}
    overlay={{
      colors: '#000',
      opacity: 0.3,
    }}
    actions={array('Actions List', actions)}
    actionHandleIcon={<InfoIcon />}
    actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      title={
        <h2>
          Some Title <span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const WithBackgroundAndGradientOverlay = () => (
  <CmtAdvCard
    backgroundColor={array('Background Color', ['#f97d1b', 'green', 'red'])}
    gradientDirection={'to right'}
    overlay={object('Overlay', {
      colors: ['#f97d1b', 'green', 'red'],
      opacity: 0.3,
    })}
    actions={array('Actions List', actions)}
    actionHandleIcon={<InfoIcon />}
    actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      title={
        <h2>
          Some Title <span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const OnlyGradientOverlay = () => (
  <CmtAdvCard
    overlay={object('Overlay', {
      colors: ['#f97d1b', 'green', 'red'],
      opacity: 0.3,
    })}
    actions={array('Actions List', actions)}
    actionHandleIcon={<InfoIcon />}
    actionHandler={handleItemClickData}>
    <CmtAdvCardContent
      title={
        <h2>
          Some Title <span>arrow</span>
        </h2>
      }
      subTitle={text('Content Sub Heading', 'subheading of content...')}
      extraContent={renderExtraData}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const MetricContentView = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithAvatar = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      avatar={<Avatar>H</Avatar>}
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithIcon = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      icon={<AllInclusiveIcon />}
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithIconAvatar = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithBackgroundColor = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      backgroundColor={color('Background Color', '#f97d1b')}
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithBackgroundImage = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      backgroundImage={
        'data:image/jpeg;base64,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'
      }
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithAlignCenterAndOverlay = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      alignCenter={boolean('Align Center', true)}
      overlay={object('Overlay', { colors: '#006aa8', opacity: 0.3 })}
      backgroundImage={
        'data:image/jpeg;base64,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'
      }
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithGradientOverlay = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      alignCenter={boolean('Align Center', true)}
      overlay={object('Overlay', {
        colors: ['#006aa8', 'green', 'yellow'],
        opacity: 0.3,
        direction: 'to right',
      })}
      backgroundColor={color('Background Image', '#f97d1b')}
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);

export const ContentWithOnlyGradientOverlay = () => (
  <CmtAdvCard>
    <CmtAdvCardContent
      alignCenter={boolean('Align Center', true)}
      overlay={object('Overlay', {
        colors: ['#006aa8', 'green', 'yellow'],
        opacity: 0.3,
        direction: 'to right',
      })}
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Content Title', 'Shrimp and Chorizo Paella')}
      subTitle={text(
        'Content Sub Heading',
        'This impressive paella is a perfect party dish and a fun meal to cook together with your guests',
      )}
      subTitleProps={object('Sub Title Props', { component: 'p' })}>
      <Box width={1} height={250} overflow="hidden">
        <CmtImage src={'https://material-ui.com/static/images/cards/paella.jpg'} alt={'media'} width="100%" />
      </Box>
    </CmtAdvCardContent>
  </CmtAdvCard>
);
