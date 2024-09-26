// React
import React from 'react'

// Project
import './OurProducts.scss'
import { images } from '../../../constants'
import RecommendationCard from '../../cards/recommendations/RecommendationCard'

const products = [
	{
		key: 1,
		category: 'Forest Retreat',
		desc: 'Are you looking to find your dream home or invest in a lucrative property.',
		image: images.recommendation_image_1,
		link: 'https://www.google.com/',
	},
	{
		key: 2,
		category: 'Woodland Retreat',
		desc: 'When it comes to selling your property, our team is equipped with the expertise.',
		image: images.recommendation_image_2,
		link: 'https://www.google.com/',
	},
	{
		key: 3,
		category: 'Harmony House',
		desc: 'Our agents will guide you through the entire buying process, from property.',
		image: images.recommendation_image_3,
		link: 'https://www.google.com/',
	},
	{
		key: 4,
		category: 'Aliva Priva Jardin',
		desc: "If you're in need of rental services, our team can assist you in finding suitable.",
		image: images.recommendation_image_4,
		link: 'https://www.google.com/',
	},
]

const OurProducts = () => {
	return (
		<section className='left-container main__block'>
			<div className='products__article'>
				<div className='products__button'>
					<img src={images.down_arrow_solution} />
					<p>Dreamer Home</p>
				</div>
				<div className='products__subarticle'>
					<span>If You're In Need Of</span>
					<span>Rental Services</span>
				</div>
			</div>
			<div className='left-container products__list'>
				{products.map(product => (
					<RecommendationCard key={product.key} product={product} />
				))}
			</div>
		</section>
	)
}

export default OurProducts;
