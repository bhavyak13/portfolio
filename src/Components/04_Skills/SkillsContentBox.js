import React from 'react'
import { BsPatchCheckFill } from 'react-icons/bs'
import { levels } from './SkillsSeed';
import './Skills.css'

const SkillsContentBox = (props) => {
    const { skills } = props;
    return (
        <>
            {
                skills.map(skill => (
                    <article className='skills__details'>
                        <BsPatchCheckFill />
                        <div>
                            <h4>{skill.name}</h4>
                            <small className='text-light'>{levels[skill.lvl - 1]}</small>
                        </div>
                    </article>
                ))
            }
        </>
    )
}

export default SkillsContentBox