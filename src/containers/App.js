import React, { useEffect, useState } from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import URLSearchParams from "url-search-params";
import MomentUtils from "@date-io/moment";
import { MuiPickersUtilsProvider } from "material-ui-pickers";
import { Redirect, Route, Switch } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { IntlProvider } from "react-intl";
import "../assets/vendors/style";
import indigoTheme from "./themes/indigoTheme";
import AppLocale from "../lngProvider";
// import SignIn from "./SignIn";
// import SignUp from "./SignUp";
// import { setInitUrl } from "../store/actions/Auth";
import { setDarkTheme, setThemeColor } from "../store/actions/Setting";
import AppLayout from "./AppLayout";
import SignIn from './Auth/Auth';
import * as authActions from '../store/actions/auth';

const RestrictedRoute = ({ component: Component, token, ...rest }) =>
  <Route
    {...rest}
    render={props =>
      token
        ? <Component {...props} />
        : <Redirect
          to={{
            pathname: '/signin',
            state: { from: props.location }
          }}
        />}
  />;

const App = (props) => {
  const dispatch = useDispatch();
  const [redirectTo, setRedirectTo] = useState();
  const { themeColor, darkTheme, locale, isDirectionRTL } = useSelector(({ settings }) => settings);
  const { token, initURL } = useSelector(({ auth }) => auth);
  const isDarkTheme = darkTheme;
  const { match, location } = props;

  useEffect(() => {
    window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
    console.log(location.pathname);
    // if (initURL === '') {
    //   dispatch(authActions.setInitURL(props.history.location.pathname));
    // }

    const tryLogin = async () => {
  
      console.log("Start up screen", token);
      if (token === undefined || token === null || token === "undefined") {
        dispatch(authActions.setInitURL('/signin'));
        // return (<Redirect to={'/signin'} />)
        setRedirectTo('/signin');
      } else {
        const expiryDate = await localStorage.getItem('expirationDate');
        const expirationDate = new Date(expiryDate);
        if (expirationDate <= new Date() || !token) {
          dispatch(authActions.setInitURL('/signin'));
          setRedirectTo('/signin');
          // return (<Redirect to={'/signin'} />)
        } else {
          const expiresIn = expirationDate.getTime() - new Date().getTime();
          const userId = await localStorage.getItem('userId');
          // dispatch(authActions.authenticate(token, userId, expiresIn / 1000));
          dispatch(authActions.setInitURL('/app'));
          setRedirectTo('/app');
          // return (<Redirect to={'/app'} />);
        }
      }
    };
    tryLogin();
  }, []);

  let applyTheme = createMuiTheme(indigoTheme);

  if(location.pathname === '/') {
    if(token === null || token === undefined || token === "undefined") {
      return <Redirect to='/signin' />
    } else {
      return <Redirect to='/app' /> 
    }
  }
  const currentAppLocale = AppLocale[locale.locale];
  console.log("in indexf file", match.url)
  return (
    <ThemeProvider theme={applyTheme}>
      <MuiPickersUtilsProvider utils={MomentUtils}>
        <IntlProvider
          locale={currentAppLocale.locale}
          messages={currentAppLocale.messages}>
          {/* <RTL> */}
          <div className="app-main">
            <Switch>
              <RestrictedRoute path={`${match.url}app`} token={token}
                component={AppLayout} />
              <Route path='/signin' component={SignIn} />
              {/* <Route path='/signup' component={SignUp} /> */}
              {/*<Route*/}
              {/*  component={asyncComponent(() => import('app/routes/extraPages/routes/404'))}/>*/}
            </Switch>
          </div>
          {/* </RTL> */}
        </IntlProvider>
      </MuiPickersUtilsProvider>
    </ThemeProvider>
  );
};


export default App;
