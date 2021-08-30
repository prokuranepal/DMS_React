// let url = 'http://34f8251071b8.ngrok.io';
// let url='https://dms.prokurainnovations.com:3444'
let url='http://1b3e-2400-1a00-b050-228e-67de-1492-a0b4-febd.ngrok.io/';

// http://876c-2400-1a00-b050-228e-67de-1492-a0b4-febd.ngrok.io/
// http://876c-2400-1a00-b050-228e-67de-1492-a0b4-febd.ngrok.io/drones/5fa28c9e13c4e8403b583835/export/

if (process.env.NODE_ENV === 'production') {
    url='https://dms.prokurainnovations.com:3444'
}

export default url;
