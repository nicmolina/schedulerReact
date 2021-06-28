/** Endpoint file
 * this file sets all the endpoints needed for this aplication using the node API published on heroku,
 * sets the headers, method and url for each one of the endpoints.
 * @function getToken
 * @returns token for setting the Authorization header of each requistion
 * 
 * @function AUTHENTICATE
 * @returns configuration for endpoint responsible to authenticate login
 * 
 * @function REGISTER_USER
 * @returns configuration for endpoint responsible to register a new user
 * 
 * @function CREATE_WORK_DAY
 * @returns configuration for endpoint that can create a new work day for each user.
 * 
 * @function GET_SPECIFIC_DAY
 * @returns configuration for endpoint that can get info of a specific day passed by the user.
 * 
 * @function GET_ALL_DAYS
 * @returns configuration for endpoint that returns all workdays of the specific user
 */

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