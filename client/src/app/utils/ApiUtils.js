/**
 * Request to the API with the library axios
 * Reference https://gist.github.com/sheharyarn/7f43ef98c5363a34652e60259370d2cb
 */
import axios from "axios";
import { authHeader } from "../services/auth.service";

const client = axios.create({
  baseURL: "https://localhost:3000",
  timeout: 1000,
  withCredentials: true,
  // transformRequest: [(data) => JSON.stringify(data.data)],
  responseType: "json",
  headers: {
    Accept: "application/json, text/plain, */*",
    "content-Type": "application/json;charset=UTF-8"
  }
});

axios.defaults.baseURL = "http://localhost:3000";

const request = (options) => {
  options.headers = authHeader();

  const onSuccess = response =>
    // console.log(response.data);
    response.data;
  const onError = (error) => {
    console.log("Request failed: ", error.config);

    if (error.response) {
      console.log("Status: ", error.response.status);
      console.log("Data: ", error.response.data);
      console.log("Headers: ", error.response.headers);
    } else {
      console.log("Error message: ", error.message);
    }

    return Promise.reject(error.response || error.message);
  };

  return axios.request(options)
    .then(onSuccess)
    .catch(onError);
};

export default request;
