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

const MedicineDetails = (props) => {
  const classes = useStyles();

  return (
    <div className={classes.modal} data-test="MedicineDetails-component">
      <img data-test="Medicine-image" className={classes.medicineImage} src="https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" alt="Medicine Image" />
      <div className={classes.medicineDetails}>
        <h3 data-test="Medicine-name">Medicine Name: {props.medicineName}</h3>
        <h3 data-test="Medicine-types">Medicine Types: {props.medicineType}</h3>
        <h3 data-test="Medicine-quantity">Medicine Quantity: {props.medicineQuantity}</h3>
      </div>
      <Button data-test="Edit-button" variant="contained" color="primary" className={classes.editButton}>
        Edit
      </Button>
    </div>
  );
}

export default MedicineDetails;
