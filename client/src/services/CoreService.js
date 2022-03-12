const axios = require("axios");

function apiHeader(){
    let element = document.getElementsByName('csrf-token')[0].content
    var headers = {
      "X-CSRF-Token": "",
      "X-Requested-With": "XMLHttpRequest",
      Accept: "application/json",
      "Content-Type": "application/json"
    }
    if (window.location.hostname !== "localhost") {
      headers["X-CSRF-Token"] = element;
    }
    return headers;
}

export async function processRequestAndResponse(url, method, data = {}) {
    return await processRequest(url, method, data)
        .then(response => {
            return { state: true, results: response.data };
        }).catch(error => {
            return { state: false, results: error };
        });
}

export async function processRequest(endpoint, method, data = {}) {
  let url = `${endpoint}`;
  //let headers = apiHeader();
  return await axios({ method, url, data });
}