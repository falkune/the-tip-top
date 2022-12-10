import { notifier } from "./utils";
import Cookies from "js-cookie";

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

const verifyLot = async (context, ticketNumber) => {

    return new Promise((resolve, reject) => {
        context.backend.auth.tickets.post('verify-ticket',{ticketNumber:ticketNumber})
            .then((response) => resolve(response))
            .catch((error) => reject(error));
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

export { checkTicketApi, claimedTickeBySession ,verifTicketApi,verifyLot,generateTicketApi,delivredLot};
