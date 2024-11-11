import axios from 'axios';

const apikey = import.meta.env.VITE_COINGECKO_API_KEY;

console.log({apikey});

export const coinGeckoInstance = axios.create({
    baseURL: 'https://api.coingecko.com/api/v3/',
    headers: {
      accept: 'application/json',
      'X-CG-API-KEY': apikey,
    },
  });