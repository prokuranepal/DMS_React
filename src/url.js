let url = 'http://34f8251071b8.ngrok.io';
// let url='dms.prokurainnovations.com:3001'
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;