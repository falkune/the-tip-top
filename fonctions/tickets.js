import { notifier } from "./utils";
import Cookies from "js-cookie";


///////////////// CHECK TICKET FUNCTION ////////////////////

const checkTicketApi = async (context, input) => {

    return new Promise((resolve, reject) => {

        context.backend.auth.tickets.post('check-ticket', { ticketNumber: input })
            .then((response) => {
                resolve(response);
                console.log("reponse",response)
            })
            .catch((error) => {
                reject(error)
            });
    })
};


/////////////////  VERIFICATION TICKET FUNCTION ////////////////////

const verifTicketApi = async (context, ticketNumber) => {

    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.patch('assign-ticket',{idClient:Cookies.get("idClient"),ticketNumber:ticketNumber})
            .then((response) => {
                resolve(response);
                console.log("reponse",response)
            })
            .catch((error) => {
                reject(error)
            });
    })
};

///////////////// DELIVRED TICKET FUNCTION ////////////////////

const delivredLot = async (context, ticketNumber) => {

    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.patch('deliver-ticket-by-admin',{ticketNumber:ticketNumber})
            .then((response) => {
                resolve(response);
                console.log("reponse",response)
            })
            .catch((error) => {
                reject(error)
            });
    })
};

///////////////// VERIFICATION LOT FUNCTION ////////////////////

const verifyLot = async (context, ticketNumber) => {

    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.post('verify-ticket',{ticketNumber:ticketNumber})
            .then((response) => resolve(response))
            .catch((error) => reject(error));
    })
};

///////////////// STATS CLAIMEDTICKET FUNCTION ////////////////////

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

///////////////// SELECT TICKET FUNCTION ////////////////////

const generateTicketApi = async (context, idSession) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.post('',{idSession:idSession})
        .then((response) => {
            resolve(response)
        })
        .catch(error => {
            reject(error)
        }) 
    })
}


const statLots = async (context, idSession) => {
    return new Promise((resolve, reject) => {
        context.backend.api.tickets.get('get-ticket-stats/'+idSession)
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
}


///////////////// GET HISTORY TICKET BY USER ID FUNCTION ////////////////////
const getHistoryClient = async (context, idClient) => {
    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.post('history-client',{idClient:idClient})
        .then((response) => resolve(response))
        .catch((error) => reject(error))
    })
}





export { checkTicketApi, claimedTickeBySession ,verifTicketApi,verifyLot,generateTicketApi,delivredLot,statLots,getHistoryClient};
