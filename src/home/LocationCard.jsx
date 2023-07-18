import React from 'react';
import { Link } from 'react-router-dom';
import './locationCard.css';

const LocationCard = ({ datas }) => {
  return (
    <>
      {datas.map(({ id: locationId, cover, title, description }) => (
        <article key={locationId} className='card-single-location'>
          <Link to={`/location/${locationId}`}>
            <img key={`img-${locationId}`} src={cover} className='img-single-location' alt={description} />
            <p key={`p-${locationId}`} className='content-single-location'>{title}</p>
          </Link>
        </article>
      ))}
    </>
  );
};

export default LocationCard;
