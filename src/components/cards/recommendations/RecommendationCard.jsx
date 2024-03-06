// React
import { Link } from 'react-router-dom'

// Project
import './RecommendationCard.scss'
import { images } from '../../../constants'

const RecommendationCard = ({ product }) => {
	const { key, category, desc, image, link } = product

	return (
		<div className='card'>
			<img width={356} height={449} src={image} alt='Products' />
			<h5>{category}</h5>
			<p className='card__desc'>{desc}</p>
			<Link to={`/detail/${key}`}>
				<div className='car__link'>
					<span className='card__booking'>BOOK NOW</span>
					<img src={images.arrow_right} alt='link' />
				</div>
			</Link>
		</div>
	)
}

export default RecommendationCard
