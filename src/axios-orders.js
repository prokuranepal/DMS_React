import axios from 'axios';

// const url='http://01692a29d8cd.ngrok.io/';
// const url = process.env.URL;
const url ="http://dms.prokurainnovations.com/"
const instance = axios.create({
    // baseURL: 'http://35.243.172.120'
    //  baseURL: 'http://192.168.10.121:8000'
    // baseURL: 'http://192.168.1.23:8002'
    //baseURL: 'http://192.168.1.16:8002'
    // baseURL: 'http://192.168.10.121:8002'
    baseURL:url
});

export default instance;