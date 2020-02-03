import axios from "axios";
import qs from "qs";

const apiBaseUrl = process.env.REACT_APP_SERVER_URL;

const APICaller = ({
  method = "get",
  reqUrl,
  data = {},
  headers = {
    "content-type": "application/json",
    Accept: "application/json"
  }
}) => {
  return new Promise(async (resolve, reject) => {
    // const user = localStorage.getItem("user");
    // let { token = false } = user ? JSON.parse(user) : {};

    let url = `${apiBaseUrl}/${reqUrl}`;
    // headers = token
    //   ? { ...headers, Authorization: `Bearer ${token}` }
    //   : headers;
    let options = {
      method,
      url,
      data,
      headers
    };
    if (method.toLowerCase() === "get") {
      options.url += `?${qs.stringify(options.data)}`;
      delete options["data"];
    }
    // console.log("request options", options);
    axios({ ...options })
      .then(response => {
        // console.log("%c{res}", "color: green", " => ", response); // eslint-disable-line no-console
        resolve(response);
      })
      .catch(error => {
        reject(error);
      });
  });
};
export default APICaller;
