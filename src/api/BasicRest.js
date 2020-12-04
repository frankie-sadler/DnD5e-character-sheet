import axios from "axios";

const client = axios.create();

function get(path) {
  return new Promise((resolve, reject) => {
    client
      .get(`https://api.open5e.com/ + ${path}`)
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
}

export { get };
