// React
import React, {useEffect, useRef, useState} from 'react'

// Project
import './OurProducts.scss'
import {images} from '../../../constants'
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
	{
		key: 5,
		category: 'Woodland Retreat',
		desc: 'When it comes to selling your property, our team is equipped with the expertise.',
		image: images.recommendation_image_2,
		link: 'https://www.google.com/',
	},
	{
		key: 6,
		category: 'Forest Retreat',
		desc: 'Are you looking to find your dream home or invest in a lucrative property.',
		image: images.recommendation_image_1,
		link: 'https://www.google.com/',
	},
]
const OurProducts = () => {
    const scrollContainerRef = useRef(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    useEffect(() => {
        const handleScroll = () => {
            if (scrollContainerRef.current) {
                const {scrollLeft, scrollWidth, clientWidth} = scrollContainerRef.current
                setShowLeftArrow(scrollLeft > 0)
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth)
            }
        }

        const currentRef = scrollContainerRef.current
        currentRef.addEventListener("scroll", handleScroll)
        handleScroll() // Check initial state

        return () => currentRef.removeEventListener("scroll", handleScroll)
    }, [])

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === "left" ? -400 : 400
            scrollContainerRef.current.scrollBy({left: scrollAmount, behavior: "smooth"})
        }
    }

    return (
        <section className="left-container main__block">
            <div className="products__article">
                <div className="products__button">
                    <img src={images.down_arrow_solution || "/placeholder.svg"} alt="Down Arrow"/>
                    <p>Dreamer Home</p>
                </div>
                <div className="products__subarticle">
                    <span>If You're In Need Of</span>
                    <span>Rental Services</span>
                </div>
            </div>
            <div className="products__container">
                {showLeftArrow && (
                    <button className="scroll-button left" onClick={() => scroll("left")}>
                        &lt;
                    </button>
                )}
                <div className="products__list" ref={scrollContainerRef}>
                    {products.map((product) => (
                        <RecommendationCard key={product.key} product={product}/>
                    ))}
                </div>
                {showRightArrow && (
                    <button className="scroll-button right" onClick={() => scroll("right")}>
                        &gt;
                    </button>
                )}
            </div>
        </section>
    )
}

export default OurProducts
