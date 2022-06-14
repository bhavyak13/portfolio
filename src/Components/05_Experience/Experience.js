import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'

const a=['','','','',''];

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Work I have done</h5>
      <h2>My Experience</h2>
      <div className='container Experience__container'>
        <article className='Experience'>
          <div className='Experience__head'>
            Web Development Intern
            <ul className='Experience__list'>
              {a.map((e,i) => (
                <li key={i}>
                  <GoPrimitiveDot className='Experience__list-icon' />
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Experience;