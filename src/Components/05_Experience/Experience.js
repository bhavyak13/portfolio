import React from 'react'
import { GoPrimitiveDot } from 'react-icons/go'
import './Experience.css'

const x = [
  {
    role:'Web Development Intern',
    content: [
      'Web Development Intern @ Rugas Technologies Private Limited (June 2022 - Present)',
      'Worked as a Full-Stack Developer in Indian-Cart Project team',
      'Developed various webpages on the live project named Your Indian Cart including Home Page, Shipping-Cost-Calculator, Store, Dashboard and many others using VueJS as frontend framework',
      'Added various new API requests at the backend for the corresponding webpages using FeathersJS.',
    ],
  },
  // {
  //   role:'Google ML Bootcamp Trainee',
  //   content: [
  //     'Selected as one of the 400 trainees all over the country in the Machine Learning Training program with specialization in Deep Learning organized by Google.',
  //     'Deep Learning Sepcialization Course was prepared by Andrew Ng and quizzes were conducted very frequently to test the learnings.',

  //   ],
  // }
]

const Experience = () => {
  return (
    <section id='Experience'>
      <h5>Work I have done</h5>
      <h2>My Experience</h2>
      <div className='container Experience__container'>
        {x.map((e, indx) => (
          <article className='Experience' key={indx}>
            <div className='Experience__head'>
              <h3>{e.role}</h3>
            </div>
            <ul className='Experience__list'>
              {e.content.map((e, i) => (
                <li key={i}>
                  <p>
                    <GoPrimitiveDot className='Experience__list-icon' />
                  </p>
                  <p>{e}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}

      </div>
    </section>
  )
}

export default Experience;