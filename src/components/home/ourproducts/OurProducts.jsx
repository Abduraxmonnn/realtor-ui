// React
import React from 'react'

// Project
import './OurProducts.scss'
import { images } from '../../../constants'

const OurProducts = () => {
	return (
		<section className='left-container main__block'>
			<div className='products__article'>
				<div className='products__button'>
					<img src={images.down_arrow_solution} />
					<p>Dreamer Home</p>
				</div>
				<div className='products__subarticle'>
					<span>
						If You're In Need Of <span>Rental</span> Services
					</span>
				</div>
			</div>
		</section>
	)
}

export default OurProducts;
