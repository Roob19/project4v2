import { getToken } from './users-service';

const BASE_URL = process.env.REACT_APP_API_URL;

export function signUp(userData) {
    console.log("users-api signUp userData= ", userData);
    return sendRequest(`${BASE_URL}/api/users`, 'POST', userData);
}

export function login(credentials) {
    return sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

/*--- Helper Functions ---*/

async function sendRequest(url, method = 'GET', payload = null) {
    // Fetch accepts an options object as the 2nd argument
    // used to include a data payload, set headers, etc.
    const options = { method };
    if (payload) {
        options.headers = { 'Content-Type': 'application/json' };
        options.body = JSON.stringify(payload);
    }
    // the new code
    const token = getToken();
    if(token){
        options.headers = options.headers || {}
        options.headers.Authorization = `Bearer ${token}`;
    }

    const res = await fetch(url, options);
    // res.ok will be false if the status code set to 4xx in the controller action
    if (res.ok) return res.json();
    throw new Error('Bad Request');
}

export function checkToken() {
    return sendRequest(`${BASE_URL}/check-token`);
}
