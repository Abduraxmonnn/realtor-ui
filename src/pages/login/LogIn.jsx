import {useState} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom";
import {images} from "../../constants";
import "./LogIn.scss"

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)
    }

    return (
        <div className="login-page">
            <div className="login-page__header">
                <Link to="/" className="login-page__brand">
                    <img
                        src={images.logo || "/placeholder.svg"}
                        alt="Logo"
                        className="login-page__logo"
                    />
                    <span className="login-page__brand-name">CAPELLA</span>
                </Link>
            </div>

            <div className="login-page__container">
                <div className="login-card">
                    <div className="login-card__header">
                        <h1 className="login-card__title">Login</h1>
                        <p className="login-card__subtitle">to get started</p>
                    </div>

                    <form className="login-form" onSubmit={handleSubmit}>
                        <div className="login-form__field">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="example@gmail.com"
                                className="login-form__input"
                                required
                            />
                        </div>

                        <div className="login-form__field">
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Password"
                                className="login-form__input"
                                required
                            />
                        </div>

                        <a href="#" className="login-form__forgot-password">
                            Forgot Password?
                        </a>

                        <button type="submit" className="login-form__submit">
                            Continue
                        </button>

                        <div className="login-form__register">
                            <span>New User? </span>
                            <Link to="/sign-up" className="login-form__register-link">
                                Register
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login;

