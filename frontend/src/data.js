export const API_KEY = "AIzaSyDkuB3w9Nkt6apjwHAMqH2wyXz-KvMdl6I";

export const value_converter = (value) => {
  if (value >= 1000000) {
    return Math.floor(value / 1000000) + "M ";
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + "K ";
  } else if (value < 1000) {
    return value;
  }
};
