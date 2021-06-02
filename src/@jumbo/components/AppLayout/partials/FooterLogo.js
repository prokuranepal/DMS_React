import React from 'react';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CmtImage from '../../../../@coremat/CmtImage';

const FooterLogo = ({ color, ...props }) => {
  const logoUrl = color === 'white' ? '/images/logo-white-symbol.png' : '/images/footer-logo.png';

  return (
    <Box className="pointer" {...props}>
      <NavLink to="/">
        <CmtImage src={logoUrl} alt="logo" />
      </NavLink>
    </Box>
  );
};

export default FooterLogo;
