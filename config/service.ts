import {firebaseApp} from './firebase'
import { AuthProvider, getAuth, signInWithPopup } from "firebase/auth"
import { signIn } from "next-auth/react"

const signInWith = (provider: AuthProvider) => {
  const firebaseAuth = getAuth(firebaseApp);
  // console.log(firebaseAuth.currentUser);

  signInWithPopup(firebaseAuth, provider)
  .then((res) => {
    const user = res.user;
    // console.log(user)
    const displayName = user.displayName;
    const email = user.email;
    const uid = user.uid;
    // contacter API
  })
  .catch((err) => {
    const errorCode = err.code;
    const errorMessage = err.message;
    // console.log(errorMessage)
    if(err.code === 'auth/account-exists-with-different-credential'){
      console.log("error");
    }
  })
}

const registerWith = (providerId: string) => {
  console.log("signing In ...")
  signIn(providerId)
}

export {registerWith}
export default signInWith;
