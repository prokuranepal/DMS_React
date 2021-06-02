// import defaultTheme from '../../../../theme/defaultTheme';
import {
  DRAWER_BREAK_POINT,
  HEADER_TYPE,
  LAYOUT_STYLES,
  LAYOUT_TYPES,
  SIDEBAR_TYPE,
  SIDEBAR_WIDTH,
  THEME_TYPES,
} from '../@jumbo/constants/ThemeOptions';

export default {
  //   theme: defaultTheme,
  defaultLng: {
    languageId: 'english',
    locale: 'en',
    name: 'English',
    icon: 'us',
  },
  languageId: 'english',
  locale: 'en',
  name: 'English',
  icon: 'us',
  layout: LAYOUT_TYPES.VERTICAL_DEFAULT,
  layoutType: LAYOUT_STYLES.FULL_WIDTH,
  themeType: THEME_TYPES.SEMI_DARK,
  drawerBreakPoint: DRAWER_BREAK_POINT.MD,
  headerType: HEADER_TYPE.FIXED,
  sidebarType: SIDEBAR_TYPE.FULL,
  isSidebarFixed: true,
  sidebarWidth: SIDEBAR_WIDTH.DEFAULT,
  showFooter: false,
};
