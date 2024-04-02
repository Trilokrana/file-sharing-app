const { default: axios } = require("axios");

const safeStringify = (data) => {
  const cache = new Set();
  return JSON.stringify(data, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        return;
      }
      cache.add(value);
    }
    return value;
  });
};

const SendEmail = (data) => {
  return axios.post("/api/send", safeStringify(data));
};

export default { SendEmail };
