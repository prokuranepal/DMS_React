import { ADD_MEDICINE, GET_MEDICINES, UPDATE_MEDICINE } from './actionTypes';
// import * as axios from '../../response/falseFetch';
import axios from '../../axios-orders';
import * as func from './common';

export const addMedicine = (medicineData) => {
    const url = '/medicines';
    return dispatch => {

        console.log(medicineData)
        const data = {
            ...medicineData,
        } 
        axios.post(url, data, { headers: func.getToken() })
            .then(response => {
                dispatch(addMedicineSuccess());
                console.log(response);
            })

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

export const getMedicines = (type) => {

    return dispatch => {
        const url = `/medicines?type=${type}`
        axios.get(url, { headers: func.getToken() })
            .then(response => {
                console.log(response)
                dispatch(getMedicineSuccess(response.data))
            })
            .catch(err => {
                console.log(err)
            })
    }
}

const getMedicineSuccess = (list) => {
    return {
        type: GET_MEDICINES,
        list: list
    }
}

export const updateMedicine = (medicineData, medicineId) => {
    const url = `/medicines/${medicineId}`;
    return dispatch => {

        console.log(medicineData)
        const data = {
            ...medicineData,
        } 
        axios.put(url, data, { headers: func.getToken() })
            .then(response => {
                dispatch(updateMedicineSuccess());
                console.log(response);
            })

        // .then(res => {
        //     console.log(medicineData);
        //     dispatch(addMedicineSuccess());
        // })
    }
}

export const updateMedicineSuccess = () => {
    return {
        type: UPDATE_MEDICINE
    }
}