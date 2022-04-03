import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import FacebookProvider from "next-auth/providers/facebook"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: <string> process.env.GOOGLE_CLIENT_ID,
      clientSecret: <string> process.env.GOOGLE_CLIENT_SECRET
    }),
    FacebookProvider({
      clientId: <string> process.env.FACEBOOK_CLIENT_ID,
      clientSecret: <string> process.env.FACEBOOK_CLIENT_SECRET
    })
    // ...add more providers here
  ],
  pages: {
    signIn: '/connexion',
    newUser: '/inscription' 
  },
  callbacks: {
    async signIn({ user, account, profile, email, credentials }){
      const isAllowedToSignIn = true
      if(isAllowedToSignIn){
        // function API
        return true
      } else {
        // we concidered the user is hear the first time
        return false
      }
    },
    // async jwt({ token, account }) {
    //   // Persist the OAuth access_token to the token right after signin
    //   if (account) {
    //     token.accessToken = account.access_token
    //     alert(account)
    //   }
    //   return token
    // }
  }
})
