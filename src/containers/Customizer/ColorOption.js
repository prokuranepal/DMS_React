import React, {useEffect, useState} from 'react';
import Drawer from '@material-ui/core/Drawer';
import URLSearchParams from 'url-search-params'
import Switch from '@material-ui/core/Switch';
import IconButton from '@material-ui/core/IconButton';
import {useDispatch, useSelector} from 'react-redux';
import {withRouter} from 'react-router-dom';

import SideNavOption from './SideNavOption';
import {changeDirection, setDarkTheme, setThemeColor} from 'actions/index';
import {
  AMBER,
  BLUE,
  CYAN,
  DARK_AMBER,
  DARK_BLUE,
  DARK_CYAN,
  DARK_DEEP_ORANGE,
  DARK_DEEP_PURPLE,
  DARK_GREEN,
  DARK_INDIGO,
  DARK_PINK,
  DEEP_ORANGE,
  DEEP_PURPLE,
  GREEN,
  INDIGO,
  PINK
} from 'constants/ThemeColors';


const ColorOption = (props) => {

  const dispatch = useDispatch();
  const [drawerStatus, setDrawerStatus] = useState(false);
  const {themeColor, darkTheme, isDirectionRTL} = useSelector(({settings}) => settings);

  useEffect(() => {
    const params = new URLSearchParams(props.location.search);
    if (params.has("theme-name")) {
      document.body.classList.add(params.get('theme-name'));
    } else {
      document.body.classList.add(themeColor);
    }
  }, [props.location.search, themeColor]);

  const toggleCustomizer = () => {
    setDrawerStatus(!drawerStatus);
  };
  const closeCustomizer = () => {
    setDrawerStatus(false);
  };
  const handleThemeColor = (colorCode) => {
    dispatch(setThemeColor(colorCode));
    const body = document.body.classList;
    body.remove(themeColor);
    body.remove('dark-theme');
    body.add(colorCode);
  };

  const handleDarkTheme = () => {
    dispatch(setDarkTheme());
    const body = document.body.classList;
    body.toggle(themeColor);
    body.toggle('dark-theme');
  };

  return (

    <div className="theme-option">
      <IconButton onClick={toggleCustomizer}>
        <i className="zmdi zmdi-settings zmdi-hc-spin text-white"/>
      </IconButton>
      <Drawer className="app-sidebar-content right-sidebar"

              anchor="right"
              open={drawerStatus}
              onClose={closeCustomizer}>
        <div className="color-theme">
          <div className="color-theme-header">
            <h3 className="color-theme-title">Service Panel </h3>

            <IconButton className="icon-btn" onClick={closeCustomizer}>
              <i className="zmdi zmdi-close text-white"/>
            </IconButton>
          </div>
          <div className="color-theme-body">
            <h3>Light Sidenav</h3>
            <ul className="color-option">
              <li><span
                onClick={() => handleThemeColor(INDIGO)}
                className={`jr-link bg-indigo ${themeColor === INDIGO && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(CYAN)}
                className={`jr-link bg-cyan ${themeColor === CYAN && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(AMBER)}
                className={`jr-link bg-amber ${themeColor === AMBER && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DEEP_ORANGE)}
                className={`jr-link bg-deep-orange ${themeColor === DEEP_ORANGE && 'active'}`}/>
              </li>

              <li><span
                onClick={() => handleThemeColor(PINK)}
                className={`jr-link bg-pink ${themeColor === PINK && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(BLUE)}
                className={`jr-link bg-blue ${themeColor === BLUE && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DEEP_PURPLE)}
                className={`jr-link bg-deep-purple ${themeColor === DEEP_PURPLE && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(GREEN)}
                className={`jr-link bg-green ${themeColor === GREEN && 'active'}`}/>
              </li>
            </ul>
            <h3>Dark Sidenav</h3>
            <ul className="color-option cr-op-dark-sidebar">
              <li><span
                onClick={() => handleThemeColor(DARK_INDIGO)}
                className={`jr-link bg-indigo ${themeColor === DARK_INDIGO && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DARK_CYAN)}
                className={`jr-link bg-cyan ${themeColor === DARK_CYAN && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DARK_AMBER)}
                className={`jr-link bg-amber ${themeColor === DARK_AMBER && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DARK_DEEP_ORANGE)}
                className={`jr-link bg-deep-orange ${themeColor === DARK_DEEP_ORANGE && 'active'}`}/>
              </li>

              <li><span
                onClick={() => handleThemeColor(DARK_PINK)}
                className={`jr-link bg-pink ${themeColor === DARK_PINK && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DARK_BLUE)}
                className={`jr-link bg-blue ${themeColor === DARK_BLUE && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DARK_DEEP_PURPLE)}
                className={`jr-link bg-deep-purple ${themeColor === DARK_DEEP_PURPLE && 'active'}`}/>
              </li>
              <li><span
                onClick={() => handleThemeColor(DARK_GREEN)}
                className={`jr-link bg-green ${themeColor === DARK_GREEN && 'active'}`}/>
              </li>
            </ul>
            <div className="row text-left">
              <div className="col-6">
                <h3 className="mb-1">RTL</h3>
                <Switch color="primary"
                        checked={isDirectionRTL}
                        onChange={() => dispatch(changeDirection())}
                />
              </div>
              <div className="col-6">
                <h3 className="mb-1">Dark Theme</h3>
                <Switch color="primary"
                        checked={darkTheme}
                        onChange={handleDarkTheme}
                />
              </div>
            </div>
            <div className="mt-3">
              <SideNavOption closeCustomizer={closeCustomizer}/>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  );
};


export default withRouter(ColorOption);

