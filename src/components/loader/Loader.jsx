import RingLoader from 'react-spinners/RingLoader';

const override = {
  display: 'block',
  margin: '100px auto',
  borderColor: '#78B0A0',
};

function Loader() {
  return (
    <div className='sweet-loading'>
      <RingLoader
        color='#78B0A0'
        loading='true'
        cssOverride={override}
        size={150}
        aria-label='Loading Spinner'
        data-testid='loader'
      />
    </div>
  );
}

export default Loader;
