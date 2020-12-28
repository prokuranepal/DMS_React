import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 200,
//     marginBottom: 30,
//     margin: 'auto'
//   },
// });

/**
* A single drone in the drone list containing a label with a radio
*
* @param {string} props.type.type - category of medicine
* @param {string} props.type.name- name of category
* @param {string} props.type.image - image of category 
* @returns {ImsCard} - It returns a card with text and image
*/


const ImsCard = props => {
// console.log(props.type)
  return (
    
    <div className="col-xl-3 col-md-4 col-sm-6 col-12">
      <Link to={{pathname: '/app/ims/medicinelist', aboutProps: {type: props.type.type}}} style={{textDecoration:'none', color: 'white'}} data-test="link-component">
      <div className="card product-item">
        <div className="card-header border-0 p-0">
          <div className="card-image">
            <div className="grid-thumb-equal">
              <span className="grid-thumb-cover jr-link">
                <img alt={props.type.name} src={props.type.image}/>
              </span>
            </div>
          </div>
        </div>
        <div className="card-body">
          <div className="product-details">
            <h3 className="card-title text-truncate fw-regular">{props.type.name}
            </h3>          
          </div>  
        </div>
      </div>
      </Link>
    </div>
    // </Link>
  )}

export default ImsCard;
