// React
import React from 'react'

// Project
import './Solution.scss'
import { images } from '../../../constants'

const Solution = () => {
	return (
		<section className='left-container solution_container'>
			<div className='solution_article'>
				<img src={images.down_arrow_solution} />
				<p>SOLUTION</p>
			</div>
			<div className='solution_content'>
				<p>
					We Assist Buyers In Finding Their <p>Dream Homes</p>
				</p>
			</div>
			<div>
				<button></button>
			</div>
		</section>
	)
}

export default Solution
