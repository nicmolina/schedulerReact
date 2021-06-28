/** Helper file
 * this file sets functions that can be called for helping on the components
 * @const getCurrentMonth
 * receives a month and return a proper string 
 * @param month
 * receives only month
 * 
 * @const formatDate
 * receives a date and sets a date, month and full year properly
 * @param d
 * receives a date
 * 
 * @const formatHours
 * format date to only have hours:minutes
 * @param d
 * receives a date
 * 
 * @const formatDateWithTime
 * format the date with day, month, full year and with hours and minutes
 * @param d
 * receives a date
 * 
 * @const formatYYYYMMDDDate
 * format the received date with the format YYYYMMDDD style
 * @param d
 * receives a date
 * 
 * @const formatStringDate
 * format received date to be a string with 'day of month' style
 * @param d
 * receives a date
 * 
 * @const formatStringDateWithYear
 * formats the received date to be a string with the style 'day of month of year'
 * @param d
 * receives a date
 * 
 * @const getPercentValue
 * gets percent value from a partial value
 * @param partialValue
 * receives the value that will have %
 * @param totalValue
 * receives the total value
 */


export const  getCurrentMonth = (month = new Date().getMonth()) => {
    var months = ['January', 'February', 'March', 'Apri', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    return months[month];
}

export const formatDate = (d = new Date) => {
    return [d?.getDate(), d?.getMonth()+1, d?.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/');
}

export const formatHours = (d = new Date) => {
    return [d?.getHours(), d?.getMinutes()].map(n => n < 10 ? `0${n}` : `${n}`).join(':');
}

export const formatDateWithTime = (d = new Date) => {
    return [d?.getDate(), d?.getMonth()+1, d?.getFullYear()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join('/') + ', ' + [d?.getHours(), d?.getMinutes()]
        .map(n => n < 10 ? `0${n}` : `${n}`).join(':');
}

export const formatYYYYMMDDDate = (date) => {
    var d = new Date(date);
    date = [
    d.getFullYear(),
    ('0' + (d.getMonth() + 1)).slice(-2),
    ('0' + d.getDate()).slice(-2)
    ].join('-');
    return date;
}

export const formatStringDate = (d = new Date) => {
    return `${d.getDate()} of ${getCurrentMonth(d.getMonth())}`
}

export const formatStringDateWithYear = (d = new Date) => {
    return `${d.getDate()} of ${getCurrentMonth(d.getMonth())} of ${d.getFullYear()}`
}

export const getPercentValue = (partialValue, totalValue) => (100 * partialValue) / totalValue;