
const createSession = async (context, body) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.sessions.post('', body)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    resolve({ message: "Session crée avec success!" });
                }
            })
            .catch((error) => {
                reject(error)
            });
    })
};


const updateSession = async (context, body) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.sessions.update('', body)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    resolve({ message: "Session modifié avec success!" });
                }
            })
            .catch((error) => {
                reject(error)
            });
    })
};


const currentSession = async (context, body) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.sessions.patch('', body)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    resolve({ message: "Session modifié avec success!" });
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


const deleteSession = async (context, idSession) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.sessions.delete(idSession)
            .then((response) => resolve(response))
            .catch((error) => reject(error))
    })
}

const getCurrentSession = async (context) => {
    return new Promise((resolve, reject) => {
        context.backend.api.sessions.get('get-current-session')
            .then((response) => resolve(response))
            .catch((error) => reject(error))
    })
}

export { createSession, getSessions, getSessionDetails , updateSession,deleteSession,currentSession, getCurrentSession};
