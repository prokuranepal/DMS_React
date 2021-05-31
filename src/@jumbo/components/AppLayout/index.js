import React, { useContext, useEffect, useState } from 'react';
import AppContext from '../contextProvider/AppContextProvider/AppContext';
import globalStyles from '../../../theme/GlobalCss';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@material-ui/core';
import { AuhMethods } from '../../../services/auth';
import { CurrentAuthMethod } from '../../constants/AppConstants';
import CircularProgress from '@material-ui/core/CircularProgress';
import makeStyles from '@material-ui/core/styles/makeStyles';
import VerticalDefault from './VerticalLayouts/VerticalDefault';
import { LAYOUT_STYLES, LAYOUT_TYPES } from '../../constants/ThemeOptions';
import VerticalMinimal from './VerticalLayouts/VerticalMinimal';
import MinimalNoHeader from './VerticalLayouts/MinimalNoHeader';
import ModernSideBar from './VerticalLayouts/ModernSidebar';
import HorizontalDefault from './HorizontalLayouts/HorizontalDefault';
import HorizontalDark from './HorizontalLayouts/HorizontalDark';
import HorizontalMinimal from './HorizontalLayouts/HorizontalMinimal';
import HorizontalTopMenu from './HorizontalLayouts/HorizontalTopMenu';
import { useLocation } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  circularProgressRoot: {
    position: 'absolute',
    left: 0,
    top: 0,
    zIndex: 1,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const AppLayout = ({ children }) => {
  const [isTemplateLoaded, setTemplateLoading] = useState(false);
  const { layout, layoutStyle, themeType, updateThemeType } = useContext(AppContext);
  const { loadUser } = useSelector(({ auth }) => auth);
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();
  globalStyles();

  useEffect(() => {
    dispatch(AuhMethods[CurrentAuthMethod].getAuthUser());
    updateThemeType(themeType);
    setTemplateLoading(true);
  }, []);

  useEffect(() => {
    setLayoutType();
  }, [layoutStyle]);

  const setLayoutType = () => {
    if (layoutStyle === LAYOUT_STYLES.FULL_WIDTH) {
      document.body.classList.remove('layout-type-boxed');
      document.body.classList.remove('layout-type-framed');
      document.body.classList.add('layout-type-fullwidth');
    } else if (layoutStyle === LAYOUT_STYLES.BOXED) {
      document.body.classList.remove('layout-type-fullwidth');
      document.body.classList.remove('layout-type-framed');
      document.body.classList.add('layout-type-boxed');
    } else if (layoutStyle === LAYOUT_STYLES.FRAMED) {
      document.body.classList.remove('layout-type-boxed');
      document.body.classList.remove('layout-type-fullwidth');
      document.body.classList.add('layout-type-framed');
    }
  };

  if (!isTemplateLoaded || !loadUser) {
    return (
      <Box className={classes.circularProgressRoot}>
        <CircularProgress />
      </Box>
    );
  }

  if (location.pathname === '/signin' || location.pathname === '/signup' || location.pathname === '/forgot-password') {
    return (
      <Box display="flex" width={1} style={{ minHeight: '100vh' }}>
        {children}
      </Box>
    );
  }

  switch (layout) {
    case LAYOUT_TYPES.VERTICAL_DEFAULT: {
      return <VerticalDefault children={children} />;
    }
    case LAYOUT_TYPES.VERTICAL_MINIMAL: {
      return <VerticalMinimal children={children} />;
    }
    case LAYOUT_TYPES.VERTICAL_MINIMAL_NO_HEADER: {
      return <MinimalNoHeader children={children} />;
    }
    case LAYOUT_TYPES.VERTICAL_MODERN_SIDEBAR: {
      return <ModernSideBar children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_DEFAULT: {
      return <HorizontalDefault children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_DARK: {
      return <HorizontalDark children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_MINIMAL: {
      return <HorizontalMinimal children={children} />;
    }
    case LAYOUT_TYPES.HORIZONTAL_TOP_MENU: {
      return <HorizontalTopMenu children={children} />;
    }
    default:
      return <VerticalDefault />;
  }
};

export default AppLayout;
