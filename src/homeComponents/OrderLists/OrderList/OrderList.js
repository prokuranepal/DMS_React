import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';

import CardMenu from '../../../components/CardMenu/CardMenu'
import { Redirect } from 'react-router';
import {useDispatch} from 'react-redux'
import * as actions from '../../../store/actions/imsOrder'
const OrderTableCell = (props) => {

  const [anchorE1, setAnchorE1] = useState(undefined);

  const [menuState, setMenuState] = useState(false);
  const [link, setLink] = useState(null);

  const dispatch = useDispatch();
  const onOptionMenuSelect = event => {
    setAnchorE1(event.currentTarget);
    setMenuState(true);
  };
  const handleRequestClose = (event, orderId) => {
    console.log(event, orderId);
    setMenuState(false);
    switch (event) {
      case "Update Data":
        dispatch(actions.getOrderDetails(orderId))
        setLink(<Redirect to='/app/ims/orders/details'/>);
        break;
      default:
        break;
    }
  };


  const { id, orderId, name,location, orderDate, deliveryDate, status } = props.data;
  // console.log(props.data);
  const statusStyle = status.includes("completed") ? "text-white bg-success" : status.includes("in processing") ? "bg-amber" : status.includes("cancelled") ? "text-white bg-danger" : "text-white bg-grey";
  return (

    <tr
      tabIndex={-1}
      key={id}
    >
      {link}
      <td>{id}</td>
      <td>{name}
        {/* <div className="user-profile d-flex flex-row align-items-center">
          
          <div className="user-detail">
            <h5 className="user-name">{name} </h5>
          </div>
        </div> */}
      </td>
      <td>{location}</td>
      <td>{orderDate}</td>
      <td>{deliveryDate}</td>
      
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
