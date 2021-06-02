import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions/imsMedicine';
import Medicine from '../../Medicine/Medicine';

/**
 * This shows a list of flights
 * @param  - No parameters
 * @returns {Medicine} - Returns the medicine component
 *
 */

const MedicineListContainer = () => {
    const dispatch = useDispatch()

    const { medicineList } = useSelector(({ ims }) => ims);
    console.log(medicineList);
    useEffect(() => {
            dispatch(actions.getMedicines('liquid'))
    
    }, [dispatch])
    return (
        <div className="app-wrapper">
            <Medicine list={medicineList} />
        </div>

    );
}

export default MedicineListContainer;