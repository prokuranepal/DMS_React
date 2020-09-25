import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import CardMenu from '../../../components/CardMenu/CardMenu'
import { Redirect } from 'react-router';

const OrderTableCell = (props) => {

  const [anchorE1, setAnchorE1] = useState(undefined);

  const [menuState, setMenuState] = useState(false);
  const [link, setLink] = useState(null);
  const onOptionMenuSelect = event => {
    setAnchorE1(event.currentTarget);
    setMenuState(true);
  };
  const handleRequestClose = (event, orderId) => {
    console.log(event, orderId);
    setMenuState(false);
    switch (event) {
      case "Update Data":
        setLink(<Redirect to='/app/ims/orders/details'/>);
        break;
      default:
        break;
    }
  };


  const { id, orderId, name, image, orderDate, deliveryDate, from, status } = props.data;
  const statusStyle = status.includes("Completed") ? "text-white bg-success" : status.includes("In Progress") ? "bg-amber" : status.includes("Delayed") ? "text-white bg-danger" : "text-white bg-grey";
  return (

    <tr
      tabIndex={-1}
      key={id}
    >
      <div data-test="link-component">{link}</div>
      <td data-test="orderId-component">{orderId}</td>
      <td>
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={name}
            src={image}
            className="user-avatar"
            data-test="image-component"
          />
          <div className="user-detail">
            <h5 className="user-name" data-test="username-component">{name}</h5>
          </div>
        </div>
      </td>
      <td data-test= "orderdate-component">{orderDate}</td>
      <td data-test= "deliverydate-component">{deliveryDate}</td>
      <td data-test= "from-component">{from}</td>
      <td className="status-cell text-right">
        <div className={` badge text-uppercase ${statusStyle}` } data-test= "status-component">{status}</div>
      </td>
      <td className="text-right">
        <IconButton onClick={onOptionMenuSelect} data-test= "iconbutton-component">
          <i className="zmdi zmdi-more-vert" /></IconButton>
        <CardMenu menuState={menuState} anchorEl={anchorE1} data-test= "cardmenu-component"
          handleRequestClose={(event) => handleRequestClose(event, orderId)} />
      </td>
    </tr>
  );
};

export default OrderTableCell;
