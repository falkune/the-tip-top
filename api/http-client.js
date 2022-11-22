

class HttpClient {
  constructor(options = {}) {
    //  this._baseURL = options.baseURL || "https://api.dev.dsp-archiwebo21-ct-df-an-cd.fr";
    this._baseURL = process.env.NEXT_PUBLIC_BASE_URL;
    this._headers = options.headers || {};

  }

  setHeader(key, value) {
    this._headers[key] = value;
    return this;
  }

  setBearerAuth(token) {
    this._headers.Authorization = `Bearer ${token}`
    return this
  }
 

  async _fetchJSON(endpoint, options = {}) {
    console.log("Dans le fetch");
    console.log(endpoint, options);
    const res = await fetch(this._baseURL + endpoint, {
      ...options,
      headers: this._headers
    });

    return res.json();
  }


  get(endpoint, options = {}) {
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        method: 'GET'
      }
    )
  }

  post(endpoint, body, options = {}) {

    console.log("body ===>",body);
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        body: JSON.stringify(body),
        method: 'POST'
      }
    )
  }

  delete(endpoint, options = {}) {
    return this._fetchJSON(
      endpoint,
      {
        parseResponse: false,
        ...options,
        method: 'DELETE'
      }
    )
  }



}

export default HttpClient
