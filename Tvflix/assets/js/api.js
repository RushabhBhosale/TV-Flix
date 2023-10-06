'use strict';

const api_key = 'b908b69cbf1920367b43cf85750d64db';
const imageBaseURL = 'https://image.tmdb.org/t/p/';



const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data, optionalParam));
}

export { imageBaseURL, api_key, fetchDataFromServer };