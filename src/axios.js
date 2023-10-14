import axios from 'axios';
import {baseURL} from './components/constants/constants'

const instance = axios.create({
  baseURL:baseURL
});

export default instance;