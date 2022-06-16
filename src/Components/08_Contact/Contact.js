import React from 'react'
import ContactForm from './ContactForm'
import contactOptions from './ContactSeeds'
import './Contact.css'

const Contact = () => {
  return (
    <section id='Contact'>

      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='contact__container container'>

        <div className='contact__options'>
          {contactOptions.map(({ name, url, icon, description }, i) => (
            <article className='contact__option' key={name}>
              <div className='contact__option-icon'>
                {icon}
              </div>
              <h4>{name}</h4>
              <h5>{description}</h5>
              <a href={`${url}${description}`} target='_blank' rel='noreferrer'>Send a Message</a>
            </article>
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact