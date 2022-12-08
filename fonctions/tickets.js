import { notifier } from "./utils";

const checkTicketApi = async (context, input) => {

    return new Promise((resolve, reject) => {

        context.backend.auth.tickets.post('check-ticket', { ticketNumber: input })
            .then((response) => {

                resolve(response);

            })
            .catch((error) => {
                reject(error)
            });
    })
};


const claimedTickeBySession = async (context, idSession) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.post('claimbed-tickets-by-session', {idSession : idSession})
        .then((response) => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        }) 
    })
}

export { checkTicketApi, claimedTickeBySession };