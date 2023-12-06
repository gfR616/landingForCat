import CardsOfCats from '../components/cardOfCats/cardsOfCats'
import Carusel from '../components/carusel'
import Dummy from '../components/dummy'
import Header from '../components/header/header'
import HelloBackground from '../components/helloBackground/helloBackground'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
	return (
		<Box bg="black">
			<Header />
			<HelloBackground />
			<Dummy />
			{/* <Carusel /> */}
			<Dummy />
			<CardsOfCats></CardsOfCats>
			<Dummy />
		</Box>
	)
}

export default HomePage
