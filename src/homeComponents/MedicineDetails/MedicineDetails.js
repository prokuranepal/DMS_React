import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(() => ({
  modal: {
    position: 'absolute',
    top: '40%',
    left: '40%',
    width: 400,
    background: '#fff',
    borderRadius: '2px',
    boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    textAlign: 'center',
  },
  medicineImage: {
    width: '100%',
  },
  editButton: {
    marginBottom: '20px',
  },
}));


/**
* Details of a medicine and can be edited
*
* @param {string} props.medicineName - name of medicine
* @param {string} props.medicineType- type of medicine
* @param {string} props.medicineQuantity - quantity of medicines
* @returns {MedicineDetails} - It returns an image, text and button
*/

const MedicineDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.modal}>
      <img className={classes.medicineImage} src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Medicine Image" />
      <div className={classes.medicineDetails}>
        <h3>Medicine Name: {props.medicineName}</h3>
        <h3>Medicine Types: {props.medicineType}</h3>
        <h3>Medicine Quantity: {props.medicineQuantity}</h3>
      </div>
      <Button variant="contained" color="primary" className={classes.editButton}>
        Edit
      </Button>
    </div>
  );
}

export default MedicineDetails;
