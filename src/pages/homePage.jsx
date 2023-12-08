import CardsOfCats from '../components/cardOfCats/cardsOfCats'
import Carusel from '../components/carusel/carusel'
import Dummy from '../components/dummy'
import Header from '../components/header/header'
import HelloBackground from '../components/helloBackground/helloBackground'
import MiniGame from '../components/miniGame/miniGame'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
	return (
		<Box bgImage="linear-gradient(90deg, #282644, #da313f, #ffc371)">
			{/* <Header /> */}
			<HelloBackground />
			<Dummy />
			<CardsOfCats />
			<Dummy />
			<Carusel />
			<Dummy />
			{/* <MiniGame /> */}
		</Box>
	)
}

export default HomePage
