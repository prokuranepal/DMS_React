import React from 'react';
import CmtCard from './index';
import CmtCardMedia from './CmtCardMedia';
import Typography from '@material-ui/core/Typography';
import { array, boolean, color, object, select, text, withKnobs } from '@storybook/addon-knobs';
import { withA11y } from '@storybook/addon-a11y';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CmtCardHeader from './CmtCardHeader';
import red from '@material-ui/core/colors/red';
import CmtCardContent from './CmtCardContent';
import CmtCardFooter from './CmtCardFooter';
import Box from '@material-ui/core/Box';
import { CallMade } from '@material-ui/icons';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';
import AllInclusiveIcon from '@material-ui/icons/AllInclusive';

export default {
  component: CmtCard,
  title: 'CmtCard',
  excludeStories: /.*Data$/,
  decorators: [withKnobs, withA11y],
};

const actionsList = [
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
  <CmtCard>
    <CmtCardHeader
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button>View Demo</Button>
    </CmtCardHeader>

    <CmtCardMedia image={image} />
  </CmtCard>
);

export const MediaWithFabButton = () => (
  <CmtCard>
    <CmtCardHeader
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button>View Demo</Button>
    </CmtCardHeader>

    <CmtCardMedia
      title={text('Title', 'Media WithFab Button')}
      cardTitle={text('Card Title', 'Media Card title')}
      image={text('Image Path', image)}
      fabButton={{ icon: <AddIcon />, color: 'primary' }}
    />
    <CmtCardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
    <CmtCardMedia
      title={text('Title', 'Media WithFab Button')}
      cardTitle={text('Card Title', 'Media Card title')}
      image={text('Image Path', image)}
      fabButton={{ icon: <AddIcon />, size: 'large' }}
    />
    <CmtCardContent>
      <Typography variant="body2" color="textSecondary" component="p">
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const WithBackgroundImage = () => (
  <CmtCard backgroundImage={text('Background Image', image)}>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={{ style: { color: '#fff' } }}
      titleProps={{ style: { color: '#fff' } }}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button style={{ color: 'white' }}>View Demo</Button>
    </CmtCardHeader>

    <CmtCardContent>
      <Typography variant="body2" component="p" style={{ color: '#fff' }}>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const WithBackgroundColor = () => (
  <CmtCard backgroundColor={color('Background Color', '#5e5e9c')}>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={{ style: { color: '#fff' } }}
      titleProps={{ style: { color: '#fff' } }}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button style={{ color: 'white' }}>View Demo</Button>
    </CmtCardHeader>

    <CmtCardContent>
      <Typography variant="body2" component="p" style={{ color: '#fff' }}>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const WithBackgroundGradientColor = () => (
  <CmtCard backgroundColor={array('Background Color', ['#03DAC5 -18.96%', '#6200EE 108.17%'])}>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={{ style: { color: '#fff' } }}
      titleProps={{ style: { color: '#fff' } }}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button style={{ color: 'white' }}>View Demo</Button>
    </CmtCardHeader>

    <CmtCardContent>
      <Typography variant="body2" component="p" style={{ color: '#fff' }}>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const WithOverlay = () => (
  <CmtCard
    backgroundColor={array('Background Color', ['#03DAC5 -18.96%', '#6200EE 108.17%'])}
    overlay={{
      colors: '#000',
      opacity: 0.3,
    }}>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={{ style: { color: '#fff' } }}
      titleProps={{ style: { color: '#fff' } }}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button style={{ color: 'white' }}>View Demo</Button>
    </CmtCardHeader>

    <CmtCardContent>
      <Typography variant="body2" component="p" style={{ color: '#fff' }}>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const WithGradientOverlay = () => (
  <CmtCard
    backgroundColor={array('Background Color', ['#03DAC5 -18.96%', '#6200EE 108.17%'])}
    overlay={{
      colors: ['#6200EE 108.17%', '#03DAC5 -18.96%'],
      opacity: 0.3,
    }}>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={{ style: { color: '#fff' } }}
      titleProps={{ style: { color: '#fff' } }}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button style={{ color: 'white' }}>View Demo</Button>
    </CmtCardHeader>

    <CmtCardContent>
      <Typography variant="body2" component="p" style={{ color: '#fff' }}>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const OnlyGradientOverlay = () => (
  <CmtCard
    overlay={{
      colors: ['#6200EE 108.17%', '#03DAC5 -18.96%'],
      opacity: 0.3,
    }}>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'default')}
      title={text('Header Title', 'Shrimp and Chorizo Paella')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={{ style: { color: '#fff' } }}
      titleProps={{ style: { color: '#fff' } }}
      avatar={<Avatar style={{ backgroundColor: red[500] }}>H</Avatar>}
      actions={array('Actions List', actionsList)}>
      <Button style={{ color: 'white' }}>View Demo</Button>
    </CmtCardHeader>

    <CmtCardContent>
      <Typography variant="body2" component="p" style={{ color: '#fff' }}>
        This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
        peas along with the mussels, if you like.
      </Typography>
    </CmtCardContent>
  </CmtCard>
);

export const headerView = () => (
  <CmtCard>
    <CmtCardHeader
      title={text('Header Title', 'Complex Interaction')}
      subTitle={text('Header Sub Title', 'September 14, 2016')}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithoutAvatar = () => (
  <CmtCard>
    <CmtCardHeader
      title={text('Header Title', 'Complex Interaction')}
      subTitle={text('Header Sub Title', 'September 14, 2016')}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithAvatar = () => (
  <CmtCard>
    <CmtCardHeader
      avatar={<Avatar>H</Avatar>}
      title={text('Header Title', 'Complex Interaction')}
      subTitle={text('Header Sub Title', 'September 14, 2016')}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithIconAvatar = () => (
  <CmtCard>
    <CmtCardHeader
      avatar={
        <Avatar>
          <AllInclusiveIcon fontSize="small" />
        </Avatar>
      }
      title={text('Header Title', 'Complex Interaction')}
      subTitle={text('Header Sub Title', 'September 14, 2016')}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithProps = () => (
  <CmtCard>
    <CmtCardHeader
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}
      title={text('Title', 'Complex Interaction')}
      subTitle={text('Sub Title', 'September 14, 2016')}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithBackground = () => (
  <CmtCard>
    <CmtCardHeader
      backgroundColor={color('Background Color', '#5e5e9c')}
      title={text('Title', 'Complex Interaction')}
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithGradientBackground = () => (
  <CmtCard>
    <CmtCardHeader
      backgroundColor={object('Gradient Background', ['#03DAC5 -18.96%', '#6200EE 108.17%'])}
      title={text('Title', 'Complex Interaction')}
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithSeparator = () => (
  <CmtCard>
    <CmtCardHeader
      separator={object('Separator', {
        color: '#5e5e9c',
      })}
      title={text('Title', 'Complex Interaction')}
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}>
      <Button>View Info</Button>
    </CmtCardHeader>
  </CmtCard>
);

export const headerWithAlignCenter = () => (
  <CmtCard>
    <CmtCardHeader
      alignCenter={boolean('Align Center', true)}
      title={text('Title', 'Complex Interaction')}
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}
    />
  </CmtCard>
);

export const headerWithActionPositionAndHover = () => (
  <CmtCard>
    <CmtCardHeader
      actionsShowOnHover={boolean('Actions Show on Hover', true)}
      actionsPos={select('Actions Position', ['default', 'top-corner'], 'top-corner')}
      alignCenter={boolean('Align Center', true)}
      title={text('Title', 'Complex Interaction')}
      titleProps={object('Title Props', {
        component: 'h3',
        gutterBottom: true,
        color: 'primary',
      })}
      subTitle={text('Sub Title', 'September 14, 2016')}
      subTitleProps={object('Sub Title Props', {
        component: 'p',
        color: 'textPrimary',
      })}
      icon={<AllInclusiveIcon />}
      actions={array('Actions List', actionsList)}
    />
  </CmtCard>
);

export const FooterView = () => (
  <CmtCard>
    <CmtCardFooter
      background={object('Background Color', {
        colors: '#5e5e9c',
      })}>
      <Button variant="contained" color="secondary">
        <InfoIcon fontSize="small" />
        <Box component="span" ml={1}>
          View Full Details
        </Box>
      </Button>
    </CmtCardFooter>
  </CmtCard>
);

export const FooterWithSeparator = () => (
  <CmtCard>
    <CmtCardFooter
      separator={object('Separator', {
        color: '#5e5e9c',
      })}
      bgColor={text('Background Color', 'cyan')}>
      <Button variant="contained" color="secondary">
        <InfoIcon fontSize="small" />
        <Box component="span" ml={1}>
          View Full Details
        </Box>
      </Button>
    </CmtCardFooter>
  </CmtCard>
);

export const FooterViewWithButtons = () => (
  <CmtCard>
    <CmtCardFooter>
      <Box component="span">
        <Button variant="outlined" color="primary">
          Buy Now
        </Button>
      </Box>
      <Box component="span" ml={1}>
        <Button variant="outlined" color="secondary">
          View Demo
        </Button>
      </Box>
    </CmtCardFooter>
  </CmtCard>
);

export const FooterViewWithBackground = () => (
  <CmtCard>
    <CmtCardFooter backgroundColor={color('Background Color', '#5e5e9c')}>
      <Box width={1} display="flex" color="white" px={2}>
        <Box component="span">
          <CallMade fontSize="small" />
          <Box component="span" ml={2}>
            3% of this week
          </Box>
        </Box>
        <Box component="span" ml="auto">
          <InfoIcon fontSize="small" />
        </Box>
      </Box>
    </CmtCardFooter>
  </CmtCard>
);

export const FooterViewWithGradientBackground = () => (
  <CmtCard>
    <CmtCardFooter
      backgroundColor={object('Gradient Background', ['#03DAC5 -18.96%', '#6200EE 108.17%'])}
      gradientDirection={text('Gradient Direction', 'to right top')}>
      <Box width={1} display="flex" color="white" px={2}>
        <Box component="span">
          <CallMade fontSize="small" />
          <Box component="span" ml={2}>
            3% of this week
          </Box>
        </Box>
        <Box component="span" ml="auto">
          <InfoIcon fontSize="small" />
        </Box>
      </Box>
    </CmtCardFooter>
  </CmtCard>
);
