import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCows = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/cows.json`)
  .then((response) => {
    const demCows = response.data;
    const cows = [];
    Object.keys(demCows).forEach((cowId) 