let url = 'http://5ae2ea2ac4de.ngrok.io';
if (process.env.NODE_ENV === 'production') {
    url='dms.prokurainnovations.com:3001'
}

export default url;