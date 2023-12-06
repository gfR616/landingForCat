import CardOfCats from '../components/cardOfCats/cardOfCats'
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
			<Carusel />
			<Dummy />
			<CardOfCats></CardOfCats>
			<Dummy />
		</Box>
	)
}

export default HomePage
