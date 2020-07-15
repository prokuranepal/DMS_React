import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton';
import Avatar from '@material-ui/core/Avatar';
import CardMenu from 'components/dashboard/Common/CardMenu';

const TimerView = (props) => {

  const [anchorE1, setAnchorE1] = useState(undefined);
  const [menuState, setMenuState] = useState(false);

  const onOptionMenuSelect = event => {
    setAnchorE1(event.currentTarget);
    setMenuState(true);
  };

 const handleRequestClose = () => {
   setMenuState(false);
  };

    const {headerColor} = props;

    return (
      <div className="jr-card">

        <div className={`jr-card-header-color text-center bg-${headerColor}`}>
          <div className="jr-card-header-top jr-card-timer-header">
            <IconButton className="jr-menu-icon mr-auto" aria-label="Menu">
              <span className="menu-icon bg-white"/>
            </IconButton>
            <IconButton className="icon-btn p-2" onClick={onOptionMenuSelect}><i
              className="zmdi zmdi-more-vert text-white"/></IconButton>
          </div>

          <Avatar className="bg-grey lighten-2 avatar-shadow size-90 mx-auto jr-card-timer-avatar">
            <h1 className="m-0 text-primary font-weight-bold">24</h1>
          </Avatar>


          <div className="jr-card-hd-content text-white">
            <h2 className="text-white jr-font-weight-medium mb-1">Monday</h2>
            <p className="mb-0">July 2017</p>
          </div>
        </div>
        <div className="jr-card-body">

          <div className="d-flex flex-column">
            <div className="list-line-item">
              <div className={`list-line-badge bg-primary`}/>

              <div className="list-line-content">
                <h4 className={`mb-1 text-primary`}>Learning React</h4>
                <p className="jr-fs-sm text-light">6:30 pm</p>
              </div>
            </div>

            <div className="list-line-item">
              <div className="list-line-badge bg-danger"/>

              <div className="list-line-content">
                <h4 className="text-danger mb-1">Logo Design</h4>
                <p className="jr-fs-sm text-light">7:15 pm</p>
              </div>
            </div>

            <div className="list-line-item">
              <div className="list-line-badge bg-success"/>

              <div className="list-line-content">
                <h4 className="text-success mb-1">Timesheet Setup</h4>
                <p className="jr-fs-sm text-light mb-0">8:45 pm</p>
              </div>
            </div>

          </div>
        </div>

        <CardMenu menuState={menuState} anchorEl={anchorE1}
                  handleRequestClose={handleRequestClose}/>
      </div>
    )
};

export default TimerView;

