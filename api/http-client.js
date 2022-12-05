


class HttpClient {
  constructor(options = {}) {
    this._baseURL = process.env.API_BASE_URL;
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
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        body: JSON.stringify(body),
        method: 'POST'
      }
    )
  }

  
  patch(endpoint, body, options = {}) {
    return this._fetchJSON(
      endpoint,
      {
        ...options,
        body: JSON.stringify(body),
        method: 'PATCH'
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