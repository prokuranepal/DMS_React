import React from 'react';
import Box from '@material-ui/core/Box';

const EmptyResult = ({ content, ...rest }) => {
  return <Box {...rest}>{content}</Box>;
};

export default EmptyResult;
