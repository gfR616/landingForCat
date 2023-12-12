import CardsOfCats from '../components/cardOfCats/cardsOfCats'
import Carusel from '../components/carusel/carusel'
import Dummy from '../components/dummy'
import HelloBackground from '../components/helloBackground/helloBackground'
import VideoBackground from '../components/helloBackground/videoBackground'
import ParallaxEffect from '../components/parallax/parallax'
import SubscriptionComponent from '../components/subscriptionComponent/subscriptionComponent'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
	return (
		{ VideoBackground } && (
			<Box bgImage="linear-gradient(90deg, #282644, #da313f, #ffc371)">
				<HelloBackground />
				<Dummy />
				<CardsOfCats />
				<Dummy />
				<Carusel />
				<Dummy />
				<ParallaxEffect />
				<SubscriptionComponent />
			</Box>
		)
	)
}

export default HomePage
