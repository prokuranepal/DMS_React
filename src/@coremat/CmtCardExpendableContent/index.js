import React, { useState } from 'react';
import { Box, Collapse, makeStyles } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import clsx from 'clsx';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import CmtCardContent from '../CmtCard/CmtCardContent';
import CmtCardActions from '../CmtCard/CmtCardActions';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
    zIndex: 1,
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

const CmtCardExpendableContent = ({ actionsComponent, className, actionsClasses, contentClass, children, ...rest }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Box className={clsx(classes.root, className)} {...rest}>
      <CmtCardActions classes={actionsClasses} disableSpacing>
        {actionsComponent}
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
          <ExpandMoreIcon />
        </IconButton>
      </CmtCardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CmtCardContent className={contentClass}>{children}</CmtCardContent>
      </Collapse>
    </Box>
  );
};

CmtCardExpendableContent.propTypes = {
  actionsComponent: PropTypes.node,
  actionsClasses: PropTypes.object,
  contentClass: PropTypes.string,
};

CmtCardExpendableContent.defaultProps = {
  actionsClasses: {},
  contentClass: '',
};

export default CmtCardExpendableContent;
