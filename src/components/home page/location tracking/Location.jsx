import LocationIcon from './location icon/LocationIcon';
import './Location.scss';

const Location = () => {
  return (
    <div className='location-wrapper'>
      <h3>Current Location</h3>
      <div>
        <h2>Reykjavík, Iceland</h2>
        <LocationIcon />
      </div>
    </div>
  );
};

export default Location;