import axios from 'axios';

export const ApiClient = axios.create({
    baseURL:`http://${window.location.href}:3001/api/v1`,
    headers: {
        "Content-type": "application/json"
    }
})