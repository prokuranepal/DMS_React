import React, { useEffect, useRef, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import * as authActions from '../store/actions/auth';
import Spinner from '../components/UI/Spinner/Spinner';

const Startup = props => {

    const dispatch = useDispatch();
    const [redirectTo, setRedirectTo] = useState();
    useEffect(() => {
        const tryLogin = async () => {
            const token = await localStorage.getItem('token');
            console.log("Start up screen", token);
            if (!token) {
                setRedirectTo('/auth');
            } else {
                const expiryDate = await localStorage.getItem('expirationDate');
                const expirationDate = new Date(expiryDate);
                if (expirationDate <= new Date() || !token) {
                    setRedirectTo('/auth');
                } else {
                    const expiresIn = expirationDate.getTime() - new Date().getTime();
                    dispatch(authActions.authenticate(token, expiresIn / 1000));
                    setRedirectTo('/dashboard');
                }
            }
        };
        tryLogin();
    }, [dispatch]);

    if (redirectTo) return <Redirect to={redirectTo} />
    return <div>
        <Spinner />
    </div>
};



export default Startup;