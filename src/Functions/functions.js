import Date from "../app/routes/Dms/Maintenance/Date";

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

export const getDate = (date) => {
    console.log(date)
    const d = date?new Date(date): null
    if(d === null)return null
    const dd = d.getFullYear() + "-"
        + ((d.getMonth()+1) < 10?('0'+(d.getMonth()+1)):d.getMonth()+1) + "-"
        +(d.getDate() < 10?'0'+d.getDate():d.getDate());
    console.log(dd);
    return dd
}

export const getTime = (date) => {
    const d = date?new Date(date): null
    if(d === null)return null
    const time = d.getHours() + ":"
        + (d.getMinutes() < 10?('0'+d.getMinutes()):d.getMinutes());
    console.log(time);
    return time;
}

export const getDuration = (startDate, endDate) => {
    if(startDate === null || endDate === null)return null
    let duration = Date.parse(endDate) - Date.parse(startDate);
    duration = (duration / 1000) / 60;
    return duration

}