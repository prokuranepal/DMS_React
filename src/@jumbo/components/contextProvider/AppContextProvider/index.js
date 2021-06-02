import React, { useState } from 'react';
import AppContext from './AppContext';
import defaultContext from './defaultContext';
import { THEME_TYPES } from '../../../constants/ThemeOptions';
import { fade } from '@material-ui/core';
import { darkTheme, lightTheme, semiDarkTheme } from '../../../../theme/themeColors';

const AppContextProvider = ({ children }) => {
  const [theme, updateTheme] = useState(defaultContext.theme);
  const [drawerBreakPoint, updateDrawerBreakPoint] = useState(defaultContext.drawerBreakPoint);
  const [headerType, updateHeaderType] = useState(defaultContext.headerType);
  const [sidebarType, updateSidebarType] = useState(defaultContext.sidebarType);

  const [locale, updateLocale] = useState(defaultContext.defaultLng);
  const [direction, setDirection] = useState(defaultContext.theme.direction);
  const [themeType, setThemeType] = useState(defaultContext.themeType);
  const [isSidebarFixed, eetSidebarPosition] = useState(defaultContext.isSidebarFixed);
  const [sidebarSize, setSidebarSize] = useState(defaultContext.sidebarWidth);
  const [sidebarStyle, setSidebarStyle] = useState({
    backgroundColor: '',
    backgroundImage: '',
    textColor: 'rgba(0, 0, 0, 0.6)',
    textDarkColor: 'rgba(0, 0, 0, 0.87)',
    textActiveColor: '#6200EE',
    navHoverBgColor: 'rgb(229, 229, 229)',
    navActiveBgColor: 'rgb(239, 229, 253)',
  });

  const [layout, setLayout] = useState(defaultContext.layout);
  const [layoutStyle, setLayoutStyle] = useState(defaultContext.layoutType);
  const [showFooter, setFooterStatus] = useState(defaultContext.showFooter);
  const [cardRadius, setCardRadius] = useState(defaultContext.theme.overrides.MuiCard.root.borderRadius);
  const [themeColors, setThemeColors] = useState({
    primary: defaultContext.theme.palette.primary.main,
    secondary: defaultContext.theme.palette.secondary.main,
  });

  const updateDirection = direction => {
    setDirection(direction);
    updateTheme({ ...theme, direction });
  };

  const updateThemeType = type => {
    setThemeType(type);
    let palette = { ...theme.palette, ...lightTheme.palette };
    let overrides = { ...theme.overrides, ...lightTheme.overrides };

    if (type === 'semi-dark') {
      palette = { ...theme.palette, ...semiDarkTheme.palette };
      overrides = { ...theme.overrides, ...semiDarkTheme.overrides };
    } else if (type === 'dark') {
      palette = { ...theme.palette, ...darkTheme.palette };
      overrides = { ...theme.overrides, ...darkTheme.overrides };
    }

    updateTheme({
      ...theme,
      palette,
      overrides,
    });
  };

  const updateCardRadius = radius => {
    setCardRadius(radius);
    updateTheme({
      ...theme,
      overrides: {
        ...theme.overrides,
        MuiCard: {
          ...theme.overrides.MuiCard,
          root: { ...theme.overrides.MuiCard.root, borderRadius: radius },
        },
      },
    });
  };

  const updateThemeColors = option => {
    let sideBarColors = getSidebarActiveColors(option);

    if ((sidebarStyle.backgroundColor || sidebarStyle.backgroundImage) && themeType !== THEME_TYPES.DARK) {
      sideBarColors = sidebarStyle;
    }

    const horizontalNavColors = getSidebarActiveColors(option);

    setThemeColors(option);
    updateTheme({
      ...theme,
      palette: {
        ...theme.palette,
        primary: {
          main: option.primary,
        },
        secondary: {
          main: option.secondary,
        },
        sidebar: {
          ...theme.palette.sidebar,
          ...sideBarColors,
        },
        horizontalNav: {
          ...theme.palette.horizontalNav,
          ...horizontalNavColors,
        },
      },
    });
  };

  const updateSidebarStyle = colorStyles => {
    let colorOptions = colorStyles;
    if (!colorStyles.backgroundColor && colorStyles.backgroundImage) {
      colorOptions = {
        ...colorStyles,
        backgroundColor: '#000',
        textColor: 'rgba(255, 255, 255, 0.7)',
        textDarkColor: '#fff',
        textActiveColor: '#fff',
        navHoverBgColor: 'rgba(187, 134, 252, 0.3)',
        navActiveBgColor: '#6200EE',
        borderColor: 'rgba(255, 255, 255, 0.2)',
      };
    }

    setSidebarStyle(colorOptions);

    updateTheme({
      ...theme,
      palette: {
        ...theme.palette,
        sidebar: {
          ...theme.palette.sidebar,
          ...colorOptions,
        },
      },
    });
  };

  const getSidebarActiveColors = option => {
    if (themeType === THEME_TYPES.SEMI_DARK) {
      return {
        navActiveBgColor: option.primary,
      };
    }
    if (themeType === THEME_TYPES.DARK) {
      return {
        navActiveBgColor: option.primary,
      };
    }
    if (themeType === THEME_TYPES.LIGHT) {
      return {
        textActiveColor: option.primary,
        navActiveBgColor: fade(option.primary, 0.1),
      };
    }
  };

  return (
    <AppContext.Provider
      value={{
        theme,
        updateTheme,
        locale,
        direction,
        updateDirection,
        updateLocale,
        themeType,
        updateThemeType,
        sidebarSize,
        setSidebarSize,
        sidebarStyle,
        setSidebarStyle,
        updateSidebarStyle,
        layout,
        setLayout,
        layoutStyle,
        setLayoutStyle,
        showFooter,
        setFooterStatus,
        cardRadius,
        updateCardRadius,
        themeColors,
        updateThemeColors,
        drawerBreakPoint,
        updateDrawerBreakPoint,
        headerType,
        updateHeaderType,
        sidebarType,
        updateSidebarType,
        isSidebarFixed,
        eetSidebarPosition,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
