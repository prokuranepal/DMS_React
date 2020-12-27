// let url = 'http://8cf84226326e.ngrok.io';
let url='http://f2d87a009ee3.ngrok.io'
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;