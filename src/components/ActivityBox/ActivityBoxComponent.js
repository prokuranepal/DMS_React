import React from 'react';

const ActivityBoxComponent = ({propTitle, propValue}) => {
  return (
       <div className = "my-2" >
       <div className = "mb-1 text-muted" data-test="prop-title-component">{propTitle}</div> 
       < div className = "text-grey text-darken-3" data-test="prop-value-component"> 
       {propValue }
        </div > 
        </ div>
        )
        }
export default ActivityBoxComponent;