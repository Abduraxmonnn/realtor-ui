import {useState} from "react"
import "./SignUp.scss"
import {images} from "../../constants"
import {Link} from "react-router-dom"

const SignUp = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
        agreeToTerms: false,
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: type === "checkbox" ? checked : value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert("Passwords don't match!")
            return
        }
        console.log("Form submitted:", formData)
    }

    return (
        <div className="signup-page">
            <div className="signup-page__header">
                <Link to="/" className="signup-page__brand">
                    <img
                        src={images.logo || "/placeholder.svg"}
                        alt="Logo"
                        className="signup-page__logo"
                    />
                    <span className="signup-page__brand-name">CAPELLA</span>
                </Link>
            </div>

            <div className="signup-page__container">
                <div className="signup-card">
                    <div className="signup-card__header">
                        <h1 className="signup-card__title">Signup</h1>
                        <p className="signup-card__subtitle">to get started</p>
                    </div>

                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="signup-form__field">
                            <input
                                type="text"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                placeholder="Username"
                                className="signup-form__input"
                                required
                            />
                        </div>

                        <div className="signup-form__field">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="itsnaeemanjum@gmail.com"
                                className="signup-form__input"
                                required
                            />
                        </div>

                        <div className="signup-form__field">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="signup-form__input"
                                required
                            />
                        </div>

                        <div className="signup-form__field">
                            <input
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                className="signup-form__input"
                                required
                            />
                        </div>

                        <div className="signup-form__terms">
                            <label className="signup-form__checkbox-label">
                                <input
                                    type="checkbox"
                                    name="agreeToTerms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleChange}
                                    className="signup-form__checkbox"
                                    required
                                />
                                <span className="signup-form__checkbox-text">Agree to Our terms and Conditions</span>
                            </label>
                        </div>

                        <button type="submit" className="signup-form__submit" disabled={!formData.agreeToTerms}>
                            Continue
                        </button>

                        <div className="signup-form__login">
                            <span>Already registered? </span>
                            <Link to="/login" className="signup-form__login-link">
                                Login
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp

