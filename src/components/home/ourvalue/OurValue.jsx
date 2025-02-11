import "./OurValue.scss"
import {images} from "../../../constants";

const OurValue = () => {
    return (
        <section className="our-value">
            <div className="our-value__images">
                <div className="our-value__image-container secondary">
                    <img
                        src={images.our_value_banner || "/placeholder.svg"}
                        alt="Contemporary house entrance"
                        className="our-value__image"
                    />
                </div>
            </div>
            <div className="our-value__content">
                <div className="our-value__header">
                    <img
                        src={images.arrow_right_down || "/placeholder.svg"}
                        alt="arrow right down"
                        className="our-value__arrow"
                    />
                    <span className="our-value__label">OUR VALUE</span>
                </div>
                <h2 className="our-value__title">
                    Unlocking
                    <br/>
                    Real Appraisal
                    <br/>
                    <span className="highlight">Services</span>
                </h2>
                <div className="our-value__cta">
                    <button className="get-started-button">Get Started Free</button>
                    <p className="our-value__description">
                        Our experts can provide valuable insights and assist you in identifying properties.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default OurValue

