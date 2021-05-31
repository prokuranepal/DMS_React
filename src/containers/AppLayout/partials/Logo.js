import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import { Box } from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import CmtImage from '../../../@coremat/CmtImage';
import LogoBig from '../../../assets/hiveLogo.png'
const Logo = ({ color, ...props }) => {
  const logoUrl = color === 'white' ? '/images/logo-white.png' : '/images/logo.png';
  const logoSymbolUrl = color === 'white' ? '../../../assets/hiveLogo_BG.png' : '../../../assets/hiveLogo_BG.png';

  return (
    <Box className="pointer" {...props}>
      <Hidden xsDown>
        <NavLink to="/">
          <CmtImage src={LogoBig} alt="logo" />
        </NavLink>
      </Hidden>
      <Hidden smUp>
        <NavLink to="/">
          <CmtImage src={LogoBig} alt="logo" style={{height: '50px'}} />
        </NavLink>
      </Hidden>
    </Box>
  );
};

export default Logo;
