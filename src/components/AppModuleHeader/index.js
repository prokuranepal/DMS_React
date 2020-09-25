import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton'
import {Dropdown, DropdownMenu, DropdownToggle, Popover} from 'reactstrap';
import SearchBox from '../SearchBox';


const AppModuleHeader = (props) => {

  const [searchBox, setSearchBox] = useState(false);
  const [popoverOpen, setPopOverOpen] = useState(false);

  const onSearchBoxSelect = () => {
    setSearchBox(!searchBox);
  };

  const toggle = () => {
    setPopOverOpen(!popoverOpen)
  };

  const {placeholder, onChange, value, user, notification, apps} = props;

  return (
    <div className="module-box-header-inner" data-test="container-component">
      <div className="search-bar right-side-icon bg-transparent d-none d-sm-block">
        <div className="form-group">
          <input className="form-control border-0" type="search" placeholder={placeholder}
                 data-test="input-component"
                 onChange={onChange}
                 value={value}/>
          <button className="search-icon"><i className="zmdi zmdi-search zmdi-hc-lg"/></button>
        </div>
      </div>

      <Popover className="p-3" placement="bottom" isOpen={popoverOpen} target="Popover1"
               toggle={toggle} data-test="popover-component">
        <h3>{user.name}</h3>
        <h4>{user.email}</h4>
      </Popover>

      <div className="d-inline-block d-sm-none">
        <Dropdown data-test="dropdown-component"
          className="quick-menu nav-searchbox"
          isOpen={searchBox}
          toggle={onSearchBoxSelect}>

          <DropdownToggle
            className="d-inline-block"
            tag="span"
            data-toggle="dropdown">
            <IconButton className="icon-btn">
              <i className="zmdi zmdi-search zmdi-hc-fw text-grey"/>
            </IconButton>
          </DropdownToggle>

          <DropdownMenu className="p-0">
            <SearchBox styleName="search-dropdown" placeholder="" data-test="search-component"
                       onChange={onChange}
                       value={value}/>
          </DropdownMenu>
        </Dropdown>
      </div>

      <div className="module-box-header-right">
        {apps && <IconButton className="size-40" aria-label="Menu">
          <i className="zmdi zmdi-apps"/>
        </IconButton>}
        {notification && <IconButton className="size-40" aria-label="Menu">
          <i className="zmdi zmdi-notifications-none"/>
        </IconButton>}

        <img className="ml-2 rounded-circle size-40 pointer" id="Popover1" alt={user.name}
        data-test="pointer-component"
             onMouseEnter={toggle}
             onMouseLeave={toggle}
             onClick={toggle}
             src={user.avatar}/>
      </div>
    </div>
  )
};

export default AppModuleHeader;

AppModuleHeader.defaultProps = {
  styleName: '',
  value: '',
  notification: true,
  apps: true
};