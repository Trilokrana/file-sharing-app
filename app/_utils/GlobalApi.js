const { default: axios } = require("axios");

const safeStringify = (data) => {
  const cache = new Set();
  return JSON.stringify(data, (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (cache.has(value)) {
        // Circular reference found, discard key
        return;
      }
      cache.add(value);
    }
    return value;
  });
};

// Use the safeStringify function to serialize data before sending it
const SendEmail = (data) => {
  axios.post("/api/send", safeStringify(data));
};

export default { SendEmail };
