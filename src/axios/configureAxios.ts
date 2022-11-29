import axios from 'axios';

export function configureAxios() {
  if (process.env.REACT_APP_API_URL) {
    axios.defaults.baseURL = process.env.REACT_APP_API_URL;
  }
}
