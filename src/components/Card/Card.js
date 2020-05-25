import React from 'react'
import classes from './Card.module.css'
import totalDeliveries from '../../assets/box-package.svg';
import totalDrones from '../../assets/drone.svg';
import flyingDrones from '../../assets/paper-plane.svg';
import totalHealthPosts from '../../assets/hospital.svg';
import newRequest from '../../assets/envelope-line.svg';

export default function Card({data, name}) {

    const info = () => {
        let title = '';
        let svg = '';

        if(name === 'totalDrones') {
            title = 'TotalDrones';
            svg = totalDrones;
        } else if(name === 'flyingDrones') {
            title = 'Flying Drones';
            svg = flyingDrones;
        } else if(name === 'totalDeliveries') {
            title = 'Deliveries Made';
            svg = totalDeliveries;
        } else if(name === 'totalHealthPosts') {
            title = 'Connected Health Posts';
            svg = totalHealthPosts;
        } else if(name === 'newRequest') {
            title = 'New Requests';
            svg = newRequest;
        }

        return { title, svg};    
    }

    const {title, svg} = info();

    return (
        
        
        <div className = {classes.Card}>
            <div className = {classes.Main}>
                <div className = {classes.Image}>
                    <img src={svg} alt="yes"/>
                </div>

                <div className = {classes.Content}>
                    <div className = {classes.Header}>{title}</div>
                    <div className = {classes.Value}>{data}</div>
                </div>
            </div>     
        </div>
    )
}
