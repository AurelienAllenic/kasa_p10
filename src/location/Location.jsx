import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import Nav from '../nav/Nav';
import { AiFillStar } from 'react-icons/ai';
import './location.css';
import DropdownText from '../DropdownText/DropdownText';
import Caroussel from '../carousel/Carousel';
import Footer from '../footer/Footer';

const Location = () => {
  const { id } = useParams();
  

  const locationData = data.find((dat) => dat.id === id);

  if (!locationData) {
    return <div>Loading...</div>; // Handle case where location data is not found
  }

  const renderStars = () => {
    const stars = [];
  
    for (let i = 0; i < 5; i++) {
      if (i < locationData.rating) {
        stars.push(<AiFillStar key={i} color="red"/>);
      } else {
        stars.push(<AiFillStar key={i} color="grey" />);
      }
    }
  
    return stars;
  };
  
  

  return (
    <>
      <Nav />
      <Caroussel images={locationData.pictures}/>
      <section id='selected_location' className='selected_location'>
        <article className='container_first_infos'>
          <div className='container_infos_left'>
          <h1 className='location_title'>{locationData.title}</h1>
          <h2 className='location_location'>{locationData.location}</h2>
        
          <span className='container_tags'>
          {locationData.tags.map((tag) => (
            <p key={tag} className='location_tags'>{tag}</p>
          ))}
          </span>
          </div>
          <div className='container_infos_right'>
            <span className='container_host_img'>
          <h3 className='location_host'>{locationData.host.name}</h3>
          <img className='location_picture' src={locationData.host.picture} alt={locationData.host.name}/>
          </span>
          <div className='stars'>{renderStars()}</div>
          </div>
        </article>
        <article className='container_second_infos'>
        <DropdownText
  datas={[
    { id: 1, title: 'Description', content: locationData.description }
    // Add more data objects as needed
  ]}
  type="description"
/>
<DropdownText
  datas={[
    { id: 1, title: 'Equipments', equipments: locationData.equipments }
    // Add more data objects as needed
  ]}
  type="list"
/>



        </article>
      </section>
      <Footer />
    </>
  );
};

export default Location;
