import "./Header.scss"
import { images } from '../../constants'

const Header = () => {
    return (
		<header className='left-container'>
			<div className='header'>
				<div className='header-logo'>
					<img src={images.logo} alt='logo' />
					<span>HTH</span>
				</div>

				<ul className='header-links'>
					<li>Home</li>
					<li>Products</li>
					<li>Pricing</li>
					<li>Contact</li>
				</ul>

				<ul className='header-login'>
					<li className='header_sing-in'>Sign In</li>
					<li className='header_sing-up'>Get Started Free</li>
				</ul>
			</div>
		</header>
	)
}


export default Header;
