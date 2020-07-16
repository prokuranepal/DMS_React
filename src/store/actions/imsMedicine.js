import {ADD_MEDICINE} from './actionTypes';
import * as axios from '../../response/falseFetch';

export const addMedicine = (medicineData) => {
    const url = './addMedicine';
    return async dispatch  => {
    await axios.post(url, medicineData);
    dispatch(addMedicineSuccess());
    console.log(medicineData);
    // .then(res => {
    //     console.log(medicineData);
    //     dispatch(addMedicineSuccess());
    // })
}
}

export const addMedicineSuccess = () => {
    return {
        type: ADD_MEDICINE
    }
}