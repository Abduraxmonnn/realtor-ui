// React
import React from 'react'

// Project
import Header from '../../components/header/Header'
import Intro from '../../components/home/intro/Intro'
import Solution from '../../components/home/solution/Solution'
import OurProducts from '../../components/home/ourproducts/OurProducts'

const Home = () => {
	return (
		<div>
			<Header />
			<Intro />
			<Solution />
			<OurProducts />
		</div>
	)
}

export default Home
