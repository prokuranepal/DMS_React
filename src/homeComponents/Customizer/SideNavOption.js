import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import {
  
  COLLAPSED_DRAWER,
  FIXED_DRAWER,
  MINI_DRAWER,
} from 'constants/ActionTypes'

import { setDrawerType} from '../../actions/index';

import {Button, ButtonGroup} from 'reactstrap';

const Customizer =()=> {

  const dispatch = useDispatch();

  const drawerType = useSelector(({settings}) => settings.drawerType);

 const setFixedDrawer = () => {
   dispatch(setDrawerType(FIXED_DRAWER));
  };

  const setCollapsedDrawer = () => {
    dispatch(setDrawerType(COLLAPSED_DRAWER));
  };

  const setMiniDrawer = () => {
    dispatch(setDrawerType(MINI_DRAWER));
  };


    return (
      <div className="side-nav-option">
        
          <ButtonGroup>
            <Button color="default"
                    className={`jr-btn  ${drawerType === FIXED_DRAWER && 'active' } `}
                    onClick={setFixedDrawer}>Fixed</Button>
            <Button color="default"
                    className={`jr-btn ${drawerType === COLLAPSED_DRAWER && 'active'} `}
                    onClick={setCollapsedDrawer}>Collapsed</Button>
            <Button color="default"
                    className={`jr-btn ${drawerType === MINI_DRAWER && 'active' } `}
                    onClick={setMiniDrawer}>Mini</Button>
          </ButtonGroup>
      
      </div>);
  };


export default (Customizer);

