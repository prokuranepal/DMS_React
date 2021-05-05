import {
    CHANGE_DIRECTION,
    CHANGE_NAVIGATION_STYLE,
    DARK_THEME,
    DRAWER_TYPE,
    FIXED_DRAWER,
    COLLAPSED_DRAWER,
    HORIZONTAL_MENU_POSITION,
    INSIDE_THE_HEADER,
    SWITCH_LANGUAGE,
    THEME_COLOR,
    TOGGLE_COLLAPSED_NAV,
    VERTICAL_NAVIGATION,
    WINDOW_WIDTH
  } from '../../constants/ActionTypes';
  import {DARK_INDIGO} from '../../constants/ThemeColors';
  
  const rltLocale = ['ar'];
  const initialSettings = {
    navCollapsed: false,
    drawerType: TOGGLE_COLLAPSED_NAV,
    themeColor: DARK_INDIGO,
    darkTheme: false,
    width: window.innerWidth,
    isDirectionRTL: false,
    navigationStyle: VERTICAL_NAVIGATION,
    horizontalNavPosition: INSIDE_THE_HEADER,
    locale: {
      languageId: 'english',
      locale: 'en',
      name: 'English',
      icon: 'us'
    }
  };
  
  const settings = (state = initialSettings, action) => {
    switch (action.type) {
      case '@@router/LOCATION_CHANGE':
        return {
          ...state,
          navCollapsed: false
        };
      case TOGGLE_COLLAPSED_NAV:
        return {
          ...state,
          navCollapsed: !state.navCollapsed
        };
      case DRAWER_TYPE:
        return {
          ...state,
          drawerType: action.drawerType
        };
      case WINDOW_WIDTH:
        return {
          ...state,
          width: action.width
        };
      case THEME_COLOR:
        return {
          ...state,
          darkTheme: false,
          themeColor: action.color
        };
      case DARK_THEME:
        return {
          ...state,
          darkTheme: !state.darkTheme
        };
      case SWITCH_LANGUAGE:
  
        return {
          ...state,
          locale: action.payload,
          isDirectionRTL: rltLocale.includes(action.payload.locale)
  
        };
      case CHANGE_DIRECTION:
        return {
          ...state,
          isDirectionRTL: !state.isDirectionRTL
  
        };
  
      case CHANGE_NAVIGATION_STYLE:
        return {
          ...state,
          navigationStyle: action.payload
        };
  
  
      case HORIZONTAL_MENU_POSITION:
        return {
          ...state,
          horizontalNavPosition: action.payload
        };
  
  
      default:
        return state;
    }
  };
  
  export default settings;
 