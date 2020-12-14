// let url = 'http://8cf84226326e.ngrok.io';
let url='http://db7a3681b3bf.ngrok.io'
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;