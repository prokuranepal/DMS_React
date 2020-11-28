import {
    configure,
    shallow
} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import {CHANGE_DIRECTION, DRAWER_TYPE, DARK_THEME, THEME_COLOR,TOGGLE_COLLAPSED_NAV, WINDOW_WIDTH} from './actionTypes';
import {toggleCollapsedNav, setDarkTheme, setDrawerType, updateWindowWidth,setThemeColor,changeDirection} from './Setting'
// JestHook.mock('expo-font');

configure({
    adapter: new EnzymeAdapter
})

describe('Setting', () => {
  it("returns an action with type DARK_THEME", () =>
        {
          const action = setDarkTheme()
          expect(action).toEqual({type: DARK_THEME}) 
        });

        it("returns an action with type DRAWER_TYPE", () =>
        {
          const action = setDrawerType("navigation")
          expect(action).toEqual({type: DRAWER_TYPE, drawerType:"navigation"}) 
        });     


        it("returns an action with type CHANGE_DIRECTION", () =>
        {
          const action = changeDirection()
          expect(action).toEqual({type: CHANGE_DIRECTION}) 
        }); 

        it("returns an action with type THEME_COLOR,", () =>
        {
          const action = setThemeColor("black")
          expect(action).toEqual({type: THEME_COLOR,color:"black"}) 
        }); 

        it("returns an action with type TOGGLE_COLLAPSED_NAV", () =>
        {
          const action = toggleCollapsedNav(true)
          expect(action).toEqual({type: TOGGLE_COLLAPSED_NAV, isNavCollapsed:true}) 
        }); 

        it("returns an action with type WINDOW_WIDTH", () =>
        {
          const action = updateWindowWidth(100)
          expect(action).toEqual({type: WINDOW_WIDTH, width:100}) 
        }); 
    });