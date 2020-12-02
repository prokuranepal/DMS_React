// let url = 'http://8cf84226326e.ngrok.io';
let url='http://192.168.1.34:3001'
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;