import { useContext } from "react";
import ApiClient from '../api/api-client';
import Cookies from 'js-cookie';

const connexion = async (context, router, params) => {
    let auth = context.backend.api.users.post('login', params, {
      Accept: "Application/json",
      "Content-Type": "application/json",
    });
    auth.then((response) => {
      if (response.statusCode) {
        console.log("erreur", response)
        setError(true)
        setMessage(response.message)
      } else {
        let logedUser = new ApiClient()
        .setHeader("lang", "en")
        .setHeader("Accept", "Application/json")
        .setHeader("Content-Type", "application/json")
        .setBearerAuth(response.accessToken)
        context.setBacked({ api: context.backend.api, auth : logedUser })
        Cookies.set("authToken", response.accessToken);
        Cookies.set('role', response.roles);

        if (response.roles.includes('admin')) {
          router.push({pathname: "/stats"},undefined,{shallow: true});
        }
      }
    });
  };

  export {connexion};