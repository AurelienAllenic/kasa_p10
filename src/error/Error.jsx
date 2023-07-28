import React from 'react'
import "./error.css"
import Footer from '../footer/Footer'
import Nav from '../nav/Nav'
const Error = () => {
  return (
    <>
    <Nav />
      <section id='error'>
        <article className='container_error'>
          <h1 className='main-title-error'>404</h1>
          <h2 className='subtitle_error'>Oups! La page que vous demandez n'existe pas</h2>
        </article>
        <article className='container-return-error'>
            <h3 className='return-error'><a href="/" className='link_error'>Retourner sur la page d'accueil</a></h3>
        </article>
      </section>
      <Footer />
    </>
  )
}

export default Error
