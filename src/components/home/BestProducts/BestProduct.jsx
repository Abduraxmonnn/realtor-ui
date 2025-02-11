import React, { useState } from 'react';
import './BestProduct.scss';
import { images } from '../../../constants';

const OurBestHomes = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const mainProperties = [
        {
            image: images.best_home__banner_1 || "/placeholder.svg",
            location: "Strategic Location",
            price: "15,000",
        },
        {
            image: images.best_home__banner_2 || "/placeholder.svg",
            location: "Urban Oasis",
            price: "18,500",
        },
        {
            image: images.best_home__banner_3 || "/placeholder.svg",
            location: "Suburban Paradise",
            price: "12,000",
        }
    ];

    const featuredHomes = [
        {
            id: 1,
            image: images.best_home__home_1 || "/placeholder.svg",
            price: "10,000"
        },
        {
            id: 2,
            image: images.best_home__home_2 || "/placeholder.svg",
            price: "11,000"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % mainProperties.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + mainProperties.length) % mainProperties.length);
    };

    return (
        <section className="best-homes">
            <div className="best-homes__header">
                <div className="best-homes__label">
                    <img src={images.arrow_right_down || "/placeholder.svg"} alt="arrow right down" className="best-homes__arrow" />
                    <span>OUR BEST HOMES</span>
                </div>
                <h2 className="best-homes__title">
                    Find Your <span className="highlight">Dream</span><br />
                    Home Here
                </h2>
            </div>

            <div className="best-homes__main-carousel">
                <div className="carousel-content">
                    <img
                        src={mainProperties[currentSlide].image || "/placeholder.svg"}
                        alt={`Property ${currentSlide + 1}`}
                        className="carousel-image"
                    />
                    <div className="carousel-overlay">
                        <span className="location">{mainProperties[currentSlide].location}</span>
                        <span className="price">${mainProperties[currentSlide].price}</span>
                    </div>
                    <div className="carousel-controls">
                        <button onClick={prevSlide} className="control-button">
                            <span>←</span>
                        </button>
                        <button onClick={nextSlide} className="control-button">
                            <span>→</span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="best-homes__featured">
                {featuredHomes.map((home) => (
                    <div key={home.id} className="featured-home">
                        <img src={home.image || "/placeholder.svg"} alt={`Featured Home ${home.id}`} />
                        <div className="price-tag">${home.price}</div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurBestHomes;
