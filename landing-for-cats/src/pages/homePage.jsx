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
		<Box>
			<Header />
			<HelloBackground />
			<Dummy />
			<Box className="wow bounceInUp">
				<Carusel />
			</Box>
		</Box>
	)
}

export default HomePage
