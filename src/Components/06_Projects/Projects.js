import React from 'react'
import { projects } from './ProjectSeeds.js'
import './Projects.css'

const Projects = () => {
  return (
    <section id='Project'>
      <h5>My recent Work</h5>
      <h2>My Projects</h2>
      <div className='container project__container'>
        {projects.map((p, i) => (
          <article className='project__item' key={i}>
            <div className='project__item-title'>
              <h3>{p.githubLink.slice(29)}</h3>
              <div className='project__item-CTA'>
                <a href={p.githubLink} className='btn' target='_blank' rel='noreferrer'>Github</a>
                <a href={p.liveDemo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>
              </div>
            </div>
            <div className='project__item-img'>
              <img src={p.img} alt={p.img} />
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects