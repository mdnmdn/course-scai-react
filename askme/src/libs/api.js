
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

api.listSurveys = async () => {
    return callFetch('survey/list');
};


export default api;