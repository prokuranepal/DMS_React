import React from 'react';
import ActivityBoxComponent from './ActivityBoxComponent';
/**
 * Wraps provided components in a nice box kjlj
 * @returns {ActivityBoxComponent} returns a well styled div component
 * @param {props} props visit, newVisit, lastWeekVisit, styleName
 */
const ActivityBox = ({visit, newVisit, lastWeekVisit, styleName}) => {
  let values= [{title: "Page / Visit", value:visit}, {title:"New Visit",value:newVisit}]
  let content = values.map((val,index)=><ActivityBoxComponent key={index} propTitle={val.title} propValue={val.value}/>)
  return (

    <div
      className={`list-group-item d-flex justify-content-between text-center border-left-0 border-right-0 ${styleName}`}>
     {content}
    </div>

  )
};

export default ActivityBox;

