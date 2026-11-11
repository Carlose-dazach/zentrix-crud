export const helpFetch = () => {
  // "/api" lo redirige Vite hacia json-server (puerto 3004)
  const URL = "/api/"

  const customFetch = (endpoint, options = {}) => {
    options.method = options.method || "GET"
    options.headers = {
      "content-type": "application/json"
    }

    // Convierte el objeto a texto JSON, si no viene body no hace nada
    if (options.body) {
      options.body = JSON.stringify(options.body)
    }

    return fetch(`${URL}${endpoint}`, options)
      .then(response => {
        return response.ok
          ? response.json()
          : Promise.reject({
              error: true,
              status: response.status,
              statusText: response.statusText
            })
      })
      .catch(() => {
        return {
          error: true,
          statusText: "No se logró la petición. ¿Está corriendo json-server (npm run server)?"
        }
      })
  }

  const get = (endpoint) => customFetch(endpoint)

  const post = (endpoint, options) => {
    options.method = "POST"
    return customFetch(endpoint, options)
  }

  const put = (endpoint, options, id) => {
    options.method = "PUT"
    return customFetch(`${endpoint}/${id}`, options)
  }

  const del = (endpoint, id) => {
    const options = { method: "DELETE" }
    return customFetch(`${endpoint}/${id}`, options)
  }

  return { get, post, put, del }
}
