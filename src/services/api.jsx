import axios from 'axios';

const BASE_URL =
  'https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=250&page=1&sparkline=false&locale=en';

const getCrypto = async () => {
  const res = await axios.get(BASE_URL);
  return res.data;
};

export { getCrypto };
