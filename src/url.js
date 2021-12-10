let url = 'http://c0e3-2400-1a00-b011-2b38-6dd7-2564-2a0f-a35d.ngrok.io';
// let url='https://dms.prokurainnovations.com:3444'
// let url='http://239e-27-34-75-187.ngrok.io';
// let url='http://b683-27-34-73-188.ngrok.io';
// http://876c-2400-1a00-b050-228e-67de-1492-a0b4-febd.ngrok.io/
// http://876c-2400-1a00-b050-228e-67de-1492-a0b4-febd.ngrok.io/drones/5fa28c9e13c4e8403b583835/export/

if (process.env.NODE_ENV === 'production') {
    url='https://dms.prokurainnovations.com:3444'
}

export default url;
