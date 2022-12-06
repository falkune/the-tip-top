///////////////////// GET SESSIONS FUNCTION ////////////////////////

const getSessions = async (context) => {
    return new Promise((resolve, reject) => {
        context.backend.api.sessions.get('')
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export {getSessions};