// React
import React from 'react'

// Project
import './Solution.scss'
import { images } from '../../../constants'

const Solution = () => {
	return (
		<section className='left-container solution__container'>
			<div className='solution__left_container'>
				<div className='solution__article'>
					<img src={images.down_arrow_solution} />
					<p>SOLUTION</p>
				</div>
				<div className='solution__content'>
					<p>
						We Assist Buyers In Finding Their <p>Dream Homes</p>
					</p>
				</div>
				<div className='solution__bottom'>
					<button>Get Started Free</button>
					<p>
						Our agents will guide you through the entire buying
						process, from property
					</p>
				</div>
			</div>

			<div className='solution__right_container'>
				<img src={images.mask_group} alt='Mask Group' />
			</div>
		</section>
	)
}

export default Solution;
