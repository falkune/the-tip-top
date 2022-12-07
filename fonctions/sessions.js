 
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

export {createSession};