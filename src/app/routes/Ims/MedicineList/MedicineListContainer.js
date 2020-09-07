import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import * as actions from '../../../../store/actions/imsMedicine';
import Medicine from '../../../../containers/Medicine/Medicine';

const MedicineListContainer = props => {
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