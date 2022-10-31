import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import './Experience.css'

const a = [
  'Working as a Full-Stack Developer in Indian-Cart Project team',
  'Developed various webpages on the live project named Your Indian Cart including Home Page, Shipping-Cost-Calculator, Store, Dashboard and many others using VueJS as frontend framework',
  'Added various new API requests at the backend for the corresponding webpages using FeathersJS.',
  //  '', '', '', ''
];

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>Work I have done</h5>
      <h2>My Experience</h2>
      <div className='container Experience__container'>
        <article className='Experience'>
          <div className='Experience__head'>
            <h3>Web Development Intern</h3>
          </div>
          <ul className='Experience__list'>
            {a.map((e, i) => (
              <li key={i}>
                <p>
                  <GoPrimitiveDot className='Experience__list-icon' />
                </p>
                <p>{e}</p>
              </li>
            ))}
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Experience;