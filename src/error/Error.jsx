import React from 'react'
import "./error.css"
const Error = () => {
  return (
    <>
      <section id='error'>
        <article className='container_error'>
          <h1 className='main-title-error'>404</h1>
          <h2>Oups! La page que vous demandez n'existe pas</h2>
        </article>
        <article className='container-return-error'>
            <h3 className='return-error'>Retourner à la page d'accueil</h3>
        </article>
      </section>
    </>
  )
}

export default Error
