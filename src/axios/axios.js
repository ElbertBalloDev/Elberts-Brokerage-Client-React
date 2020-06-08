import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://brokerage.herokuapp.com',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;