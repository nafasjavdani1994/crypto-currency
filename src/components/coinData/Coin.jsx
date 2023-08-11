import React from 'react';

// styles
import './coin.css';

const Coin = ({ data }) => {
  const {
    image,
    symbol,
    name,
    current_price,
    market_cap,
    price_change_percentage_24h,
  } = data;
  return (
    <div className='coin__container'>
      <img className='coin__image' src={image} alt={`${name} image`} />
      <div className='coin__col'>
        <small>Name</small>
        <span className='coin__name'>{name}</span>
      </div>
      <div className='coin__col'>
        <small>Symbol</small>
        <span className='coin__symbol'>{symbol.toUpperCase()}</span>
      </div>
      <div className='coin__col'>
        <small>Current Price</small>
        <span className='coin__price'>
          <strong>$</strong>
          {current_price.toLocaleString()}
        </span>
      </div>
      <div className='coin__col'>
        <small>Price Change 24h</small>
        <span
          className={
            price_change_percentage_24h > 0
              ? 'coin__price-change-green'
              : 'coin__price-change-red'
          }
        >
          {price_change_percentage_24h?.toFixed(2)}%
        </span>
      </div>
      <div className='coin__col'>
        <small>Market Cap</small>
        <span className='coin__market-cap'>
          <strong>$</strong>
          {market_cap.toLocaleString()}
        </span>
      </div>
    </div>
  );
};

export default Coin;
