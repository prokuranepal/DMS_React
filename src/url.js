let url = 'http://e1e44dc2b97e.ngrok.io';
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;