const BASE_URL = 'https://schedulerbackend.herokuapp.com';

function getToken() {
    const token = window.localStorage.getItem('BearerToken');
    return token;
}

export function AUTHENTICATE(payload, apiUrl = BASE_URL) {
    return {
        url: `${apiUrl}/user/authenticate`,
        method: 'POST',
        headers: {
            ContentType: 'application/json;charset=UTF-8'
        },
        data: payload
    }
}

export function REGISTER_USER(payload, apiUrl = BASE_URL) {
    return {
        url: `${apiUrl}/user/register`,
        method: 'POST',
        headers: {
            ContentType: 'application/json;charset=UTF-8'
        },
        data: payload
    }
}

export function CREATE_WORK_DAY(payload, apiUrl = BASE_URL) {
    return {
        url: `${apiUrl}/hour/register`,
        method: 'POST',
        headers: {
            Authorization: getToken(),
            ContentType: 'application/json;charset=UTF-8'
        },
        data: payload
    }
}

export function GET_SPECIFIC_DAY(payload, apiUrl = BASE_URL) {
    return {
        url: `${apiUrl}/hour/specificday`,
        method: 'POST',
        headers: {
            Authorization: getToken(),
            ContentType: 'application/json;charset=UTF-8'
        },
        data: payload
    }
}

export function GET_ALL_DAYS(payload, apiUrl = BASE_URL) {
    return {
        url: `${apiUrl}/hour/all`,
        method: 'GET',
        headers: {
            Authorization: getToken(),
            ContentType: 'application/json;charset=UTF-8'
        },
        data: payload
    }
}