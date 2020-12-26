import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
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
import settingsReducer , { initialSettings} from './Settings'

// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})
const function_click=jest.fn()

describe('settingsReducer', () => {
    it("returns default initial state", () =>
    {
      const newState = settingsReducer(undefined,{type:""})
      expect(newState).toEqual(initialSettings)
    });
    it("on receiving @@router/LOCATION_CHANGE", () =>
    {
      const newState = settingsReducer(undefined, {type:"@@router/LOCATION_CHANGE"})
      expect(newState).toEqual({...initialSettings,navCollapsed:false})
    });
    it("on receiving TOGGLE_COLLAPSED_NAV with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:TOGGLE_COLLAPSED_NAV})
      expect(newState).toEqual({...initialSettings, navCollapsed:!initialSettings.navCollapsed})
    });

    it("on receiving DRAWER_TYPE with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:DRAWER_TYPE, drawerType:"folded"})
      expect(newState).toEqual({...initialSettings, drawerType:"folded"})
    });
    it("on receiving WINDOW_WIDTH with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:WINDOW_WIDTH, width:200})
      expect(newState).toEqual({...initialSettings, width:200})
    });
    it("on receiving THEME_COLOR with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:THEME_COLOR, color:"blue"})
      expect(newState).toEqual({...initialSettings, darkTheme:false, themeColor:"blue"})
    });
    it("on receiving DARK_THEME with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:DARK_THEME, color:"blue"})
      expect(newState).toEqual({...initialSettings, darkTheme:true, themeColor:"dark-indigo"})
    });
    it("on receiving THEME_COLOR with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:THEME_COLOR, color:"blue"})
      expect(newState).toEqual({...initialSettings, darkTheme:false, themeColor:"blue"})
    });

    it("on receiving THEME_COLOR with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:THEME_COLOR, color:"blue"})
      expect(newState).toEqual({...initialSettings, darkTheme:false, themeColor:"blue"})
    });
    it("on receiving THEME_COLOR with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:THEME_COLOR, color:"blue"})
      expect(newState).toEqual({...initialSettings, darkTheme:false, themeColor:"blue"})
    });
    it("on receiving THEME_COLOR with initial state", () =>
    {
      const newState = settingsReducer(undefined, {type:THEME_COLOR, color:"blue"})
      expect(newState).toEqual({...initialSettings, darkTheme:false, themeColor:"blue"})
    });
    });