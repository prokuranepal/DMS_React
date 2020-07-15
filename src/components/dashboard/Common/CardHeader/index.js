import React, {useState} from 'react';
import IconButton from '@material-ui/core/IconButton'
import CardMenu from '../CardMenu';

const CardHeader = (props) => {

  const [anchorE1, setAnchorE1] = useState(undefined);
  const [menuState, setMenuState] = useState(false);


  const onOptionMenuSelect = event => {
    setMenuState(true);
    setAnchorE1(event.currentTarget);
  };

  const handleRequestClose = () => {
    setMenuState(false);
  };

  const {heading, subHeading} = props;
  let {styleName} = props;

  return (
    <div className={`jr-card-header d-flex align-items-start ${styleName}`}>
      <div className="mr-auto">
        <h3 className="card-heading">{heading}</h3>
        {subHeading && <p className="sub-heading">{subHeading}</p>}
      </div>

      <IconButton className="icon-btn text-dark" onClick={onOptionMenuSelect}>
        <i className="zmdi zmdi-chevron-down"/>
      </IconButton>
      <CardMenu menuState={menuState} anchorEl={anchorE1}
                handleRequestClose={handleRequestClose}/>
    </div>
  )
};

export default CardHeader;
CardHeader.defaultProps = {
  styleName: '',
  subHeading: ''
};

