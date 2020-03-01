import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/'
})

export default instance;