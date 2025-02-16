import {useState} from "react"
import "./Feedbacks.scss"
import {images} from '../../../constants';
import {StarRating} from "../../../utils/starRatingUtils";

const testimonials = [
    {
        id: 1,
        name: "Sarah M.",
        role: "Property consultation",
        avatar: images.feedback_avatar_1,
        content:
            "I had the pleasure of working with ABC Realty to find my dream home, and I couldn't be happier with the entire experience. From the moment I walked into their office, I felt welcomed and supported by their friendly team.",
        rating: 4,
    },
    {
        id: 2,
        name: "Esther Howard",
        role: "Property consultation",
        avatar: images.feedback_avatar_1,
        content:
            "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
        rating: 5,
    },
    {
        id: 3,
        name: "Esther Howard",
        role: "Property consultation",
        avatar: images.feedback_avatar_1,
        content:
            "Once we found the perfect home, Sarah guided me through every step of the buying process, making it feel effortless on my part. She was an excellent negotiator, and thanks to her skills, I was able to secure a fantastic deal on my new home.",
        rating: 4.5,
    },
]


const TestimonialsCarousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0)

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    }

    return (
        <section className="testimonials">
            <div className="testimonials__container">
                <div className="testimonials__header">
                    <h2 className="testimonials__title">
                        Our Customers
                        <br/>
                        Think We're
                        <br/>
                        The Best
                    </h2>
                    <div className="testimonials__navigation">
                        <button
                            className="navigation-button navigation-button--prev"
                            onClick={prevSlide}
                            aria-label="Previous testimonial"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="15 18 9 12 15 6"/>
                            </svg>
                        </button>
                        <button
                            className="navigation-button navigation-button--next"
                            onClick={nextSlide}
                            aria-label="Next testimonial"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <polyline points="9 18 15 12 9 6"/>
                            </svg>
                        </button>
                    </div>
                </div>

                <div className="testimonials__grid">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={testimonial.id}
                            className={`testimonial-card ${
                                index === currentSlide || index === currentSlide + 1 || index === currentSlide + 2
                                    ? "testimonial-card--visible"
                                    : "testimonial-card--hidden"
                            }`}
                        >
                            <div className="testimonial-card__content">
                                <div className="testimonial-card__header">
                                    <span className="testimonial-card__quote">"</span>
                                    <StarRating rating={testimonial.rating}/>
                                </div>

                                <p className="testimonial-card__text">{testimonial.content}</p>

                                <div className="testimonial-card__footer">
                                    <div className="testimonial-card__author">
                                        <img src={testimonial.avatar || "/placeholder.svg"} alt=""
                                             className="testimonial-card__avatar"/>
                                        <div className="testimonial-card__info">
                                            <h3 className="testimonial-card__name">{testimonial.name}</h3>
                                            <p className="testimonial-card__role">{testimonial.role}</p>
                                        </div>
                                    </div>
                                    <svg
                                        className="testimonial-card__badge"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                        <polyline points="22 4 12 14.01 9 11.01"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsCarousel

