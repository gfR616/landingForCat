import Carusel from '../components/carusel'
import Dummy from '../components/dummy'
import Header from '../components/header/header'
import HelloBackground from '../components/helloBackground/helloBackground'
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { WOW } from 'wowjs'
import 'wowjs/css/libs/animate.css'

const HomePage = () => {
	useEffect(() => {
		new WOW().init()
	}, [])
	return (
		<Box bg="black">
			<Header />
			<HelloBackground />
			<Dummy />
			<Box className="wow slideInRight" data-wow-duration="1s" data-wow-delay="1s">
				<Carusel />
			</Box>
			<Dummy />
		</Box>
	)
}

export default HomePage
