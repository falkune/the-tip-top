
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
        console.log("response: ++++++++>:", response);
        if (response && response.accessToken) { this.setBearerAuth(response.accessToken); return response; }
        return response;

      }

    };
  }

  get tickets() {
    return {
      get: () => this.get("/ticket"),
      delete: (id) => this.delete(`/ticket/${id}`),
      create: (user) => this.post("/ticket", user),
      update: (user) => this.put(`/ticket/${user.id}`, user),

    };
  }
}

export default ApiClient
