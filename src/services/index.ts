import axios from 'axios';

const baseURL = 'https://router.project-osrm.org/'

export const instance = axios.create({
  baseURL
})