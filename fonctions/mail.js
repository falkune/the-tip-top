
const SendMail = async (context, body) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.sessions.post('', body)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    resolve({ message: "Email envoyé" });
                }
            })
            .catch((error) => {
                reject(error)
            });
    })
};


const getToken = async (context) => {
    return new Promise((resolve, reject) => {
        const data ={
            grant_type:process.env.NEXT_PUBLIC_SENDPULSE_METHOD,
            client_id:process.env.NEXT_PUBLIC_SENDPULSE_ID,
            client_secret:process.env.NEXT_PUBLIC_SENDPULSE_SECRET
         }
        context.backend.sender.token.post(data)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    resolve({ message: "token " });
                    console.log(message)
                }
            })
            .catch((error) => {
                reject(error)
            });
    })
};


export {getToken,SendMail}