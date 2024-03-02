import React from 'react'
import './Intro.scss'
import { images } from '../../../constants'

const Intro = () => {
	return (
		<section className='left-container'>
			<div className='title'>
				<h1>We are a leading</h1>
				<h1>
					real estate <p>agency</p>
				</h1>
				<img src={images.intro_background_home} />
			</div>
		</section>
	)
}

export default Intro
