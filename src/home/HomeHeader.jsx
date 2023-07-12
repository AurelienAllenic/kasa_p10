import React from 'react';
import imageHome from '../assets/src_home.jpg';
import "./homeHeader.css";

const HomeHeader = () => {
  return (
    <article className='container_header_home'>
      <div className='image-container'>
        <img src={imageHome} alt="Chez vous, partout et ailleurs" className='img_header_home' />
      </div>
      <p className='content_home_header'><span className='first_part_content_header_home'>Chez vous,</span> <span className='second_part_content_header_home'>partout et ailleurs</span></p>
    </article>
  );
};

export default HomeHeader;
