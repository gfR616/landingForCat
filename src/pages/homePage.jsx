import CardsOfCats from '../components/cardOfCats/cardsOfCats'
import Carusel from '../components/carusel/carusel'
import Dummy from '../components/dummy'
import HelloBackground from '../components/helloBackground/helloBackground'
import VideoBackground from '../components/helloBackground/videoBackground'
import LoadingScreen from '../components/loadingScreen'
import ParallaxEffect from '../components/parallax/parallax'
import SubscriptionComponent from '../components/subscriptionComponent/subscriptionComponent'
import { Box } from '@chakra-ui/react'
import React, { useState } from 'react'

const HomePage = () => {
	const [videoLoaded, setVideoLoaded] = useState(false)
	console.log(videoLoaded)
	const handleVideoLoadedChecker = () => {
		setVideoLoaded(true)
	}
	return (
		<>
			<VideoBackground onVideoLoadedChecker={handleVideoLoadedChecker} />
			{videoLoaded ? (
				<Box
					h="auto"
					overflow="hidden"
					bgImage="linear-gradient(90deg, #282644, #da313f, #ffc371)"
				>
					<HelloBackground />
					<Dummy />
					<CardsOfCats />
					<Dummy />
					<Carusel />
					<Dummy />
					<ParallaxEffect />
					<SubscriptionComponent />
				</Box>
			) : (
				<LoadingScreen />
			)}
		</>
	)
}

export default HomePage
