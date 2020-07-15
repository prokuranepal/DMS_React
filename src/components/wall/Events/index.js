import React from "react";

import EventItem from "./EventItem";

const Events = (props) => {

  return (
    <div>
      <div className="flex-row mb-3">
        <h4>EVENTS</h4>
        <a className="ml-auto"><u>VIEW ALL</u></a>
      </div>
      {props.eventList.map((event) => {
          return <EventItem key={event.id} index={event.id} data={event}/>
        }
      )}
    </div>
  )
}

export default Events
