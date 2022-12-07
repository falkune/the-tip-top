 
const createSession = async (context,body) => {
     

    return new Promise((resolve, reject) => {

        
        context.backend.auth.sessions.post('', body)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    resolve({message: "Session créée avec success!"});   
                }
            })
            .catch((error) => {
                reject(error)
            });
    })
};


const getSessions = async (context) => {
    return new Promise((resolve, reject) => {
        context.backend.api.sessions.get('')
        .then(response => resolve(response))
        .catch(error => reject(error)) 
    })
}


const getSessionDetails = async (context, idSession) => {
    return new Promise((resolve, reject) => {
        context.backend.api.sessions.get(idSession)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
}
export {createSession, getSessions, getSessionDetails};
