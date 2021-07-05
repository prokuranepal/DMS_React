// let url = 'http://34f8251071b8.ngrok.io';
let url='https://dms.prokurainnovations.com/api'
if (process.env.NODE_ENV === 'production') {
    url='https://dms.prokurainnovations.com/api'
}

export default url;
