import React from 'react'
import './about.css'
import Nav from '../nav/Nav'
import DropdownTextAbout from '../DropdownText/DropdownTextAbout'
import '../DropdownText/dropdownText.css'
import imageAbout from "../assets/about.jpg"
import Footer from '../footer/Footer'

const About = () => {
  return (
    <>
      <Nav/>
      <section id='selections_about' className='selections_about'>

      <div className='image-container'>
        <img src={imageAbout} alt="Chez vous, partout et ailleurs" className='img_header_home image_about' />
      </div>
      <div className='container_dropdowns'>
      <DropdownTextAbout
  datas={[
    { id: 1, title: 'Fiabilité', content: "Les annonces postées sur kasa garantissent une fiabilité totale. Les photos sont conformes aux logements et toutes les informations sont régulièrement vérifiées par nos équipes." }
  ]}
/>
<DropdownTextAbout
  datas={[
    { id: 1, title: 'Respect', content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comporttement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme." }
  ]}
/>
<DropdownTextAbout
  datas={[
    { id: 1, title: 'Service', content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question." }
  ]}
/>
<DropdownTextAbout
  datas={[
    { id: 1, title: 'Sécurité', content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes." }
  ]}
/>
</div>

</section>
<Footer />
    </>
  )
}

export default About
