import ApiClient from '../api/api-client';
import Cookies from 'js-cookie';
import firebaseApp  from '../config/firebase';
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    FacebookAuthProvider
} from "firebase/auth"
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();


///////////////////// LOGIN FUCNTION ////////////////////////

const login = async (context, email, password) => {
    const params = {
        email: email,
        password: password,
    };
    return new Promise((resolve, reject) => {
        context.backend.api.users.post('login', params)
            .then((response) => {
                if (response.statusCode) {
                    resolve(response);
                } else {
                    let logedUser = new ApiClient()
                        .setHeader("lang", "en")
                        .setHeader("Accept", "Application/json")
                        .setHeader("Content-Type", "application/json")
                        .setBearerAuth(response.accessToken)
                    context.setBacked({ api: context.backend.api, auth: logedUser })
                    Cookies.set("authToken", response.accessToken);
                    Cookies.set('role', response.roles);
                    Cookies.set('idClient', response.refreshToken);

                    resolve(logedUser)
                }
            })
            .catch((error) => {
                reject(error)
            });
    })
};

//////////////////// REGISTER FUCNTION //////////////////////

const register = async (context, fullName, email, password, birthday) => {
    const params = {
        fullName: fullName,
        email: email,
        password: password,
        birthday: birthday
    };

    return new Promise((resolve, rejecte) => {
        context.backend.api.users.post('', params)
        .then((response) => {
            resolve(response);
        })
        .catch((error) => rejecte(error));
    })
    
}
///////////////// REFRESH TOKEN FUCNTION ////////////////////

const refreshToken = (refreshToken) => {

}

///////////////// GOOGLE LOGIN ////////////////////

const googleLoginRegister = async (context) => {
    const firebaseAuth = getAuth(firebaseApp);
    return new Promise((resolve, reject) => {
        signInWithPopup(firebaseAuth, GoogleProvider)
        .then((res) => {
        const user = {
            email: res.user.email,
            fullName: res.user.displayName,
            socialNetworkUserId: res.user.uid,
            socialNetworkAccessToken: res.user.accessToken,
            socialNetworkProvider: res.user.providerId,
            password: "1234678910",
            birthday: ""

        }

        context.backend.api.users.post('auth-from-social-network', user)
            .then((response) => {
                console.log(response)
                let logedUser = new ApiClient()
                    .setHeader("lang", "en")
                    .setHeader("Accept", "Application/json")
                    .setHeader("Content-Type", "application/json")
                    .setBearerAuth(response.accessToken)
                context.setBacked({ api: context.backend.api, auth: logedUser })
                Cookies.set("authToken", response.accessToken);
                Cookies.set('role', response.roles);
                Cookies.set('idClient', response.refreshToken);

                resolve(logedUser)
            })
            .catch((error) => {
                reject(error)
            })
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })

}

///////////////// FACEBOOK LOGIN ////////////////////
const facebookLoginRegister = async (context) => {
    const firebaseAuth = getAuth(firebaseApp);
    return new Promise((resolve, reject) => {
        signInWithPopup(firebaseAuth, FacebookProvider)
        .then((res) => {
            const user = {
                email: res.user.email,
                fullName: res.user.displayName,
                socialNetworkUserId: res.user.uid,
                socialNetworkAccessToken: res.user.accessToken,
                socialNetworkProvider: res.user.providerId,
                password: "1234678910",
                birthday: ""

            }


            context.backend.api.users.post('auth-from-social-network', user)
            .then((response) => {
                console.log(response)
                let logedUser = new ApiClient()
                    .setHeader("lang", "en")
                    .setHeader("Accept", "Application/json")
                    .setHeader("Content-Type", "application/json")
                    .setBearerAuth(response.accessToken)
                context.setBacked({ api: context.backend.api, auth: logedUser })
                Cookies.set("authToken", response.accessToken);
                Cookies.set('role', response.roles);
                Cookies.set('idClient', response.refreshToken);

                resolve(logedUser)
            })
            .catch((error) => {
                reject(error)
            })
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })

}


const forgotPassword = async (context, email) => {
    return new Promise((resolve, rejecte) => {
        context.backend.api.users.post('forgot-password', {email: email})
        .then((response) => {
            resolve(response);
        })
        .catch((error) => rejecte(error));
    })
}


const resetPassword  = async (context, email, password) => {
    return new Promise((resolve, rejecte) => {
        context.backend.api.users.post('reset-password', {email: email, password: password})
        .then((response) => {
            resolve(response);
        })
        .catch((error) => rejecte(error));
    })
}

export { login, register, refreshToken, googleLoginRegister, facebookLoginRegister, forgotPassword, resetPassword };