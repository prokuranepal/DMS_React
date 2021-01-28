// import Date from "../app/routes/Dms/Maintenance/Date";

/**
 * returns validity of input
 * @param   {string} value  - the value of input
 * @param   {Object} rules  - a object of rules
 * @return  {Boolean} - validity of input
 */
export const checkValidity = (value, rules) => {
    // console.log("sasas");
    let isValid = true;
    if (!rules) {
        return true;
    }

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLength) {
        isValid = value.length >= rules.minLength && isValid
    }

    if (rules.maxLength) {
        isValid = value.length <= rules.maxLength && isValid
    }

    if (rules.isEmail) {
        const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
        isValid = pattern.test(value) && isValid
    }

    if (rules.isNumeric) {
        const pattern = /^\d+$/;
        isValid = pattern.test(value) && isValid
    }
    // console.log(isValid);

    return isValid;
}

/**
 * returns date in year-month-date format
 * @param   {string} date  - date in string format
 * @return  {string} - returns date in year-month-date format
 */

export const getDate = (date) => {
    console.log(date)
    const d = date?new Date(date): null
    if(d === null)return null
    console.log(d)
    const dd = d.getFullYear() + "-"
        + ((d.getMonth()+1) < 10?('0'+(d.getMonth()+1)):d.getMonth()+1) + "-"
        +(d.getDate() < 10?'0'+d.getDate():d.getDate());
    console.log(dd);
    return dd
}

/**
 * returns time in hour-minute-second format
 * @param   {string} date  - time in string format
 * @return  {string} - returns time in hour-minute-second format
 */
export const getTime = (date) => {
    const d = date?new Date(date): null
    if(d === null)return null
    const time = d.getHours() + ":"
        + (d.getMinutes() < 10?('0'+d.getMinutes()):d.getMinutes());
    console.log(time);
    return time;
}

/**
 * returns duration between two events
 * @param   {string} startDate  - start date
 * @param   {string} endDate  - end date
 * @return  {Integer} - returns duration in minutes
 */
export const getDuration = (startDate, endDate) => {
    if(startDate === null || endDate === null)return null
    let duration = Date.parse(endDate) - Date.parse(startDate);
    duration = (duration / 1000) / 60;
    return duration

}