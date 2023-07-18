import React from 'react'
import './home.css'
import Nav from '../nav/Nav'
import HomeHeader from './HomeHeader'
import data from '../data.json'
import LocationCard from './LocationCard'
import Footer from '../footer/Footer'
const Home = () => {
  return (
    <>
      <Nav />
      <HomeHeader/>
      <section id='locations' className='locations_section'>
        <LocationCard datas={data} key='locations_cards'/>
      </section>
      <Footer />
    </>
  )
}

export default Home
