import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import HomeHeader from './HomeHeader'
import data from '../data.json'
import LocationCard from './LocationCard'
const Home = () => {
  return (
    <div>
      <Nav />
      <HomeHeader/>
      <section id='locations' className='locations_section'>
        <LocationCard datas={data} key='locations_cards'/>
      </section>
    </div>
  )
}

export default Home
