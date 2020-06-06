export const post  = async (url, data) => {
    // console.log(url,data);
    const response = await import(url+'');
    return response;
};