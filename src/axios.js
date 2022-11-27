import axios from 'axios';

const instance = axios.create({
  // THE API (cloud function) URL
baseURL: 'https://us-central1-clone-8297e.cloudfunctions.net/ap',

});

export default instance;
