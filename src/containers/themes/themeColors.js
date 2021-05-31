import { THEME_TYPES } from '../../@jumbo/constants/ThemeOptions';

export const semiDarkTheme = {
  palette: {
    type: THEME_TYPES.LIGHT,
    sidebar: {
      bgColor: '#363636',
      textColor: 'rgba(255, 255, 255, 0.3)',
      textDarkColor: '#fff',
      textActiveColor: '#fff',
      navHoverBgColor: 'rgba(187, 134, 252, 0.08)',
      navActiveBgColor: '#6200EE',
      borderColor: 'rgba(255, 255, 255, 0.08)',
    },
    horizontalNav: {
      navigationColor: 'rgba(255, 255, 255, 0.74)',
      navigationActiveColor: 'rgba(255, 255, 255, 1)',
      textColor: 'rgba(0, 0, 0, 0.6)',
      textDarkColor: 'rgba(0, 0, 0, 0.87)',
      textActiveColor: '#6200EE',
      menuHoverBgColor: 'rgb(229, 229, 229)',
      menuActiveBgColor: 'rgb(239, 229, 253)',
    },
    common: {
      dark: '#020202',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f4f4f7',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.3)',
      white: '#fff',
    },
    borderColor: {
      main: 'rgba(0, 0, 0, 0.06)',
      dark: 'rgba(0, 0, 0, 0.12)',
    },
    lightBtn: {
      bgColor: '#f5f5f5',
      textColor: 'rgba(0, 0, 0, 0.38)',
    },
    popupColor: {
      main: '#fff',
    },
  },
  overrides: {
    MuiTab: {
      textColorPrimary: {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: '#FFFFFF',
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
};
export const darkTheme = {
  palette: {
    type: THEME_TYPES.DARK,
    sidebar: {
      bgColor: '#363636',
      textColor: 'rgba(255, 255, 255, 0.3)',
      textDarkColor: '#fff',
      textActiveColor: '#fff',
      navHoverBgColor: 'rgba(187, 134, 252, 0.08)',
      navActiveBgColor: '#6200EE',
      borderColor: 'rgba(255, 255, 255, 0.08)',
    },
    horizontalNav: {
      navigationColor: 'rgba(255, 255, 255, 0.74)',
      navigationActiveColor: 'rgba(255, 255, 255, 1)',
      textColor: 'rgba(255, 255, 255, 0.3)',
      textDarkColor: '#fff',
      textActiveColor: '#6200EE',
      menuHoverBgColor: 'rgb(0, 0, 0, 0.8)',
      menuActiveBgColor: 'rgb(0, 0, 0, 0.5)',
    },
    common: {
      dark: '#fff',
    },
    background: {
      paper: '#121212',
      default: '#2e2e2e',
    },
    text: {
      primary: 'rgba(255, 255, 255, 0.87)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.38)',
      hint: 'rgba(255, 255, 255, 0.3)',
      white: '#fff',
    },
    borderColor: {
      main: 'rgba(255, 255, 255, 0.06)',
      dark: 'rgba(255, 255, 255, 0.12)',
    },
    lightBtn: {
      bgColor: '#535151',
      textColor: 'rgba(255, 255, 255, 0.38)',
    },
    popupColor: {
      main: '#363636',
    },
  },
  overrides: {
    MuiTab: {
      textColorPrimary: {
        color: 'rgba(255, 255, 255, 0.87)',
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: '#535050',
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: '#2e2e2e',
      },
    },
  },
};
export const lightTheme = {
  palette: {
    type: THEME_TYPES.LIGHT,
    sidebar: {
      bgColor: '#fff',
      textColor: 'rgba(0, 0, 0, 0.6)',
      textDarkColor: 'rgba(0, 0, 0, 0.87)',
      textActiveColor: '#6200EE',
      navHoverBgColor: 'rgb(229, 229, 229)',
      navActiveBgColor: 'rgb(239, 229, 253)',
      borderColor: 'rgba(33, 33, 33, 0.08)',
    },
    horizontalNav: {
      navigationColor: 'rgba(255, 255, 255, 0.74)',
      navigationActiveColor: 'rgba(255, 255, 255, 1)',
      textColor: 'rgba(0, 0, 0, 0.6)',
      textDarkColor: 'rgba(0, 0, 0, 0.87)',
      textActiveColor: '#6200EE',
      menuHoverBgColor: 'rgb(229, 229, 229)',
      menuActiveBgColor: 'rgb(239, 229, 253)',
    },
    common: {
      dark: '#020202',
    },
    background: {
      paper: '#FFFFFF',
      default: '#f4f4f7',
    },
    text: {
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.6)',
      disabled: 'rgba(0, 0, 0, 0.38)',
      hint: 'rgba(0, 0, 0, 0.3)',
      white: '#fff',
    },
    borderColor: {
      main: 'rgba(0, 0, 0, 0.06)',
      dark: 'rgba(0, 0, 0, 0.12)',
    },
    lightBtn: {
      bgColor: '#f5f5f5',
      textColor: 'rgba(0, 0, 0, 0.38)',
    },
    popupColor: {
      main: '#fff',
    },
  },
  overrides: {
    MuiTab: {
      textColorPrimary: {
        color: 'rgba(0, 0, 0, 0.87)',
      },
    },
    MuiPopover: {
      paper: {
        backgroundColor: '#FFFFFF',
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: '#FFFFFF',
      },
    },
  },
};
