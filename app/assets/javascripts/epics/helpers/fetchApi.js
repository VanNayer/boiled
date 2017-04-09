export const postAndParseJson = uri => fetch(uri, {
  credentials: 'same-origin',
  method: 'POST',
  headers: {
    ContentType: 'application/json; charset=utf-8',
  },
}).then(response => response.json().then(json => json))
