import React from 'react'
import CV from '../../assets/CV.pdf'

//CTA : ClickToAction
const CTA = () => {
    return (
        <div className='CTA'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href='#Contact' className='btn btn-primary'>Let's talk</a>
        </div>
    )
}

export default CTA;