import React from 'react'
import SkillsContentBox from './SkillsContentBox'
import { frontendSkills, backendSkills } from './SkillsSeed'

const Skills = () => {
  return (
    <section id="skill">
      <h5>what skills I have</h5>
      <h2>My Skills</h2>
      <div className='container skills__container'>
        <div className='skills__frontend'>
          <h3>Frontend Development</h3>
          <div className='skills__content'>
            <SkillsContentBox skills={frontendSkills} />
          </div>
        </div>
        <div className='skills__backend'>
          <h3>Backend Development</h3>
          <div className='skills__content'>
            <SkillsContentBox skills={backendSkills} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills