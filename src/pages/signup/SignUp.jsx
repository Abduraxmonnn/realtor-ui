import {images} from "../../constants"
import SignUpForm from "../../forms/AuthForm/SignUpForm";
import "./SignUp.scss"
import {Link} from "react-router-dom";

const SignUp = () => {
    return (
        <div className="signup-page">
            <div className="signup-page__header">
                <Link to="/" className="signup-page__brand">
                    <img src={images.logo || "/placeholder.svg"} alt="Logo" className="signup-page__logo"/>
                    <span className="signup-page__brand-name">CAPELLA</span>
                </Link>
            </div>

            <div className="signup-page__container">
                <SignUpForm/>
            </div>
        </div>
    )
}

export default SignUp

