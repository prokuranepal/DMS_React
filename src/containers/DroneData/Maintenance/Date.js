import React from "react";

export default function (date) {
    let text = null;
    if (date.date !== undefined) {
        const dd = date.date;
        // console.log(dd);
        if (dd !== undefined && dd !== null && dd.date !== null) {
            if (typeof dd === 'string') {
                
                const d = new Date(dd);
                // console.log(d);
                if (!isNaN(d.getDate())) {
                    text = d ? `${d.getFullYear()}-${d.getMonth()}-${d.getDay()}` : null;
                }
            } else if (!isNaN(dd.getDate())) {
                // console.log('date');
                text = dd ? `${dd.getFullYear()}-${dd.getMonth() + 1}-${dd.getDate()}` : null;
                // console.log(date,text);
            }
        }
    }
    return <div>{text}</div>
}
