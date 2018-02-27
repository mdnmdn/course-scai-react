
const baseUrl = 'https://askme-scai.firebaseapp.com/';

const callFetch = async (apiUrl, options = {}) => {
    try{
        const effectiveOptions = {
            headers: {
                //'content-type': 'application/json'
            },
            ...options,
        };

        const response = await fetch(baseUrl + apiUrl, effectiveOptions);
        const data = await response.json();
        return data;
    }catch(error){
        console.log('error:' , error);
        return { err: error };
    }
}

const api = {};

api.listSurveys = async ({search, first, count}) => {
    const parameters = '?first=' + first + 
                        '&count=' + count +
                        '&search=' + search;
    return callFetch('survey/list' + parameters);
};


export default api;