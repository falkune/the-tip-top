import ApiClient from '../api/api-client';
import Cookies from 'js-cookie';
import {useContext} from 'react'
import {firebaseApp} from '../config/firebase';
import { 
    getAuth, 
    signInWithPopup, 
    GoogleAuthProvider, 
    FacebookAuthProvider 
} from "firebase/auth"
const GoogleProvider = new GoogleAuthProvider();
const FacebookProvider = new FacebookAuthProvider();
import ApiContext from '../context/apiContext';



///////////////////// LOGIN FUCNTION ////////////////////////

const login = async (context, router, params) => {
    
};

//////////////////// REGISTER FUCNTION //////////////////////

const register = (fullName, email, password, birthday) => {
    
}

///////////////// REFRESH TOKEN FUCNTION ////////////////////

const refreshToken = (fullName, email, password, birthday) => {
    
}

///////////////// GOOGLE LOGIN ////////////////////

const googleLoginRegister = async () => {
    const firebaseAuth = getAuth(firebaseApp);
    return new Promise((resolve, reject) => {
        signInWithPopup(firebaseAuth, GoogleProvider)
        .then((res) => {
        const user = {
            email: res.user.email,
            fullName: res.user.displayName,   
            socialNetworkUserId:res.user.uid,
            socialNetworkAccessToken:res.user.accessToken,
            socialNetworkProvider: res.user.providerId,
            password: "",
            birthday: ""

        }
        resolve(user)
        })
        .catch((error) => {
            console.log(error)
            reject(error)
        })
    })
    
    


    // console.log("Registration",user)

   
    
  }

///////////////// FACEBOOK LOGIN ////////////////////

export {login, register, refreshToken, googleLoginRegister};