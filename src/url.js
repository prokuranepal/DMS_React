let url = 'http://5deeb2db5762.ngrok.io';
// let url='dms.prokurainnovations.com:3001'
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;