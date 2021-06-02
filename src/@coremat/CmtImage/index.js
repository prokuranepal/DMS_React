import React from 'react';

const CmtImage = ({ src, alt, ...rest }) => {
  return <img src={src} alt={alt} {...rest} style={{height: '50px'}}/>;
};

export default CmtImage;
