export const  getCurrentMonth = (month = new Date().getMonth()) => {
    var months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
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
    return `${d.getDate()} de ${getCurrentMonth(d.getMonth())}`
}

export const formatStringDateWithYear = (d = new Date) => {
    return `${d.getDate()} de ${getCurrentMonth(d.getMonth())} de ${d.getFullYear()}`
}

export const getPercentValue = (partialValue, totalValue) => (100 * partialValue) / totalValue;