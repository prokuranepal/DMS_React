export const post  = async (url, data) => {
    // console.log(url,data);
    const response = await import(url+'');
    return response;
};

export const get  = async (url) => {
    // console.log(url,data);
    const response = await import(url+'');
    return response;
};