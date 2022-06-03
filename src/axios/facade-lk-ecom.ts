import axios from 'axios';

export default axios.create( {
    baseURL: window.location.origin + '/api/',
    headers: {
        'Content-Type': 'application/json'
    }
} );
