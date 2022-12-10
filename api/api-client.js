import Cookies from "js-cookie";
import HttpClient from "./http-client"

class ApiClient extends HttpClient {
  constructor(baseURL, langCode) {

    super({
      baseURL,
      headers: {
        lang: langCode
      }
    });
  }

  get users() {
    return {
      get: (route) => this.get(`/user/${route}`),
      delete: (id) => this.delete(`/user/${id}`),
      create: (user) => this.post("/user", user),
      update: (user) => this.put(`/user/${user.id}`, user),
      post: async (route, body, options) => {
        let response = await this.post(`/user/${route}`, body, options); 
        return response;
      }
    };
  }


  get sessions() {
    return {
      get: (route) => this.get(`/Session/${route}`),
      delete: (id) => this.delete(`/Session/${id}`),
      create: (session) => this.post("/Session", session),
      update: (session) => this.put(`/Session/${session.id}`, session),
      post: async (route, body, options) => {
        let response = await this.post(`/Session/${route}`, body, options);
        //if (response && response.accessToken) { this.setBearerAuth(response.accessToken) }
        return response;

      },
      patch: async (route, body, options) => {
        let response = await this.patch(`/Session/${route}`, body, options);
        //if (response && response.accessToken) { this.setBearerAuth(response.accessToken) }
        return response;

      }

    };
  }


  get groups() {
    return {
      get: (route) => this.get(`/Group/${route}`),
      delete: (id) => this.delete(`/Group/${id}`),
      create: (group) => this.post("/Group", group),
      update: (group) => this.put(`/Group/${group.id}`, group),
      post: async (route, body, options) => {
        let response = await this.post(`/Group/${route}`, body, options);
        //if (response && response.accessToken) { this.setBearerAuth(response.accessToken) }
        return response;

      }

    };
  }

  get tickets() {
    return {
      get: () => this.get("/ticket"),
      get: (id) => this.get(`/ticket/${id}`),
      delete: (id) => this.delete(`/ticket/${id}`),
      create: (user) => this.post("/ticket", user),
      update: (user) => this.put(`/ticket/${user.id}`, user),
      post: async (route, body, options) => {
        let response = await this.post(`/ticket/${route}`, body, options);
        return response;
      },
      patch: async (route, body, options) => {
        let response = await this.patch(`/ticket/${route}`, body, options);
        return response;
      }

    };
  }

  setCookie(key , value){
    Cookies.set(key, value)
  }

  getCookie(key){
    return Cookies.get(key)
  }
}

export default ApiClient
