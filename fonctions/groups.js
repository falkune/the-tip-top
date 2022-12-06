///////////////////// GET GROUPS FUNCTION ////////////////////////

const getGroups = async (context) => {
    return new Promise((resolve, reject) => {
        context.backend.api.groups.get('')
        .then((response) => {
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export {getGroups};