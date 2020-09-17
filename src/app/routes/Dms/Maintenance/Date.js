import React from "react";

export default function Date({ date }) {
    let text = null;
    // console.log(date);
    if (date !== null) {
        if (typeof date === 'string') {
            // console.log('string');
            const d = new Date(date);
            if (!isNaN(d.getDate())) {
                text = date ? `${date.getFullYear()}-${date.getMonth()}-${date.getDay()}` : null;
            }
        } else if (!isNaN(date.getDate())) {
            // console.log('date');
            text = date ? `${date.getFullYear()}-${date.getMonth() +1}-${date.getDate()}` : null;
            // console.log(date,text);
        }
    }
    return <div>{text}</div>
}
