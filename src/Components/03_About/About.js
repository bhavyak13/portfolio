import React from 'react'
import './About.css'
import aboutImg from '../../assets/aboutImg.jpg'
import { FaAward } from 'react-icons/fa'
import { MdOutlineMapsHomeWork } from 'react-icons/md'
import { SiBookstack } from 'react-icons/si'



const About = () => {
	return (
		<section id='about'>
			<h5>Get to know</h5>
			<h2>About Me</h2>

			<div className=' container about__container'>
				<div className='about__me'>
					<div className='about__me-image'>
						<img src={aboutImg} alt='aboutImg' />
					</div>
				</div>

				<div className='about__content'>
					<div className='about__cards'>
						{cards.map(card => (
							<article className='about__card' key={card.name}>
								{card.icon}
								<h5>{card.name}</h5>
								<small>{card.text}</small>
							</article>
						))}
					</div>

					<p>- 🎓 Bachelor of Technology (B.Tech), Computer Science (2024).
						{/* <br />- 🌱 I’m currently learning Next.js! */}
						<br />- 🌇 Delhi Native, with a passion for creating and developing software that addresses real-world problems.
						<br />- 📚 Working as Full-Stack Developer, developing interactive and user-friendly applications using the MERN Stack.
						<br />- 💻 As for my future, I hope to one day work as a Full Stack Developer Role and work with a diverse team and solve complex problems in an innovative way.
						<br />- 📖 In my free time, you can find me solving DSA problems!
					</p>

					<a href='#contact' className='btn btn-primary'>
						Let's Talk
					</a>
				</div>
			</div>
		</section>
	)
}
const cards = [
	{
		icon: <MdOutlineMapsHomeWork />,
		name: 'Experience',
		text: '3+ months Working',
	},
	{
		icon: <FaAward />,
		name: 'Achievements',
		text: 'Pupil @Codeforces',
	},
	{
		icon: <SiBookstack />,
		name: 'Projects',
		text: '10+ Completed',
	},
]

export default About