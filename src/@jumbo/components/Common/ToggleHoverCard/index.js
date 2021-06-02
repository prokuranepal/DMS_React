import React, { useState } from 'react';
import CmtCard from '../../../../@coremat/CmtCard';
import CmtCardHeader from '../../../../@coremat/CmtCard/CmtCardHeader';
import CmtCardContent from '../../../../@coremat/CmtCard/CmtCardContent';
import Box from '@material-ui/core/Box';
import { Typography, useTheme } from '@material-ui/core';

const ToggleHoverCard = ({ title, hoverAction, isHovered, toggleAction, isToggled, children, ...rest }) => {
  const [actionToggled, setActionToggled] = useState(false);
  const theme = useTheme();

  const handleMouseEnter = () => {
    if (isHovered) isHovered(true);
  };
  const handleMouseLeave = () => {
    if (isHovered) isHovered(false);
  };

  const handleToggleClick = () => {
    if (isToggled) isToggled(!actionToggled);
    setActionToggled(!actionToggled);
  };

  return (
    <CmtCard {...rest}>
      <CmtCardHeader
        title={title}
        separator={{
          color: theme.palette.borderColor.main,
        }}>
        {hoverAction && (
          <Box onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {typeof hoverAction === 'string' ? <Typography>{hoverAction}</Typography> : hoverAction}
          </Box>
        )}
        {toggleAction && (
          <Box ml={2} className="pointer" onClick={handleToggleClick}>
            {typeof toggleAction === 'string' ? <Typography>{toggleAction}</Typography> : toggleAction}
          </Box>
        )}
      </CmtCardHeader>
      <CmtCardContent>{children}</CmtCardContent>
    </CmtCard>
  );
};

export default ToggleHoverCard;
