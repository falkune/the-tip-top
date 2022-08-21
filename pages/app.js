
import React, { useState, useEffect } from 'react'
import Login from './composants/login'
import Main from './composants/main'
import Register from './composants/register'
export default function Principal() {
  const [user, setUser] = useState('fhjk')
  switch(user){
    case null:
      return (
        <div>
          <Login/>
        </div>
      )
      break
    case 'connexion':
      return (
        <div>
          <Login/>
        </div>
      )
      break
    case 'inscription':
      return (
        <div>
           <Register/>
       </div>
      )
      break
    default:
      return (
         <div>
         <Main/>
         </div>
      )
  }
  
 }
