import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import CardMenu from '../../CardMenu/CardMenu'
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
      {link}
      <td>{orderId}</td>
      <td>
        <div className="user-profile d-flex flex-row align-items-center">
          <Avatar
            alt={name}
            src={image}
            className="user-avatar"
          />
          <div className="user-detail">
            <h5 className="user-name">{name} </h5>
          </div>
        </div>
      </td>
      <td>{orderDate}</td>
      <td>{deliveryDate}</td>
      <td>{from}</td>
      <td className="status-cell text-right">
        <div className={` badge text-uppercase ${statusStyle}`}>{status}</div>
      </td>
      <td className="text-right">
        <IconButton onClick={onOptionMenuSelect}>
          <i className="zmdi zmdi-more-vert" /></IconButton>
        <CardMenu menuState={menuState} anchorEl={anchorE1}
          handleRequestClose={(event) => handleRequestClose(event, orderId)} />
      </td>
    </tr>
  );
};

export default OrderTableCell;
