import React, { useState, useEffect } from 'react';

// Styles
import './landing.css';

// Icons
import { BiSearch } from 'react-icons/bi';

// API
import { getCrypto } from '../../services/api';

// Components
import Loader from '../loader/Loader';
import Coin from '../coinData/Coin';

const Landing = () => {
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    const fetchAPI = async () => {
      const coins = await getCrypto();
      console.log(coins);
      setData(coins);
    };
    fetchAPI();
  }, []);

  const handleSearch = (event) => {
    setSearchValue(event.target.value);
  };

  const searchedCoins = data.filter((coin) =>
    coin.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className='landing__container'>
      {data.length ? (
        <div>
          <div className='input-group'>
            <input
              className='landing__input'
              type='text'
              placeholder='Search ...'
              value={searchValue}
              onChange={handleSearch}
            />
            <BiSearch className='search-icon' />
          </div>
          <div className='coins__container'>
            {searchedCoins.map((coin) => (
              <Coin key={coin.id} data={coin} />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
