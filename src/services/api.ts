import axios from 'axios';
const token = localStorage.getItem('@letscode:Token');
let formattedToken = '';
if (token) {
    formattedToken = JSON.parse(token);
}
const api = axios.create({
    baseURL: 'http://localhost:5000',
    headers: {
        Authorization: `Bearer ${formattedToken}`
    }
});

export default api;
