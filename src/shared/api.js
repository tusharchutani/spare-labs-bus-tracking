exports.TRANSLINK_API = (API_KEY) =>  `https://api.translink.ca/rttiapi/v1/buses?apikey=${API_KEY}`;
exports.PROXY_URL = (URL_TO_PROXY) => `https://cors-anywhere.herokuapp.com/${URL_TO_PROXY}`;