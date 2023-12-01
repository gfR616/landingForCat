import Carusel from '../components/carusel'
import Header from '../components/header/header'
import HelloBackground from '../components/helloBackground/helloBackground'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
	return (
		<Box>
			<Header></Header>
			<HelloBackground />
			<Carusel />
		</Box>
	)
}

export default HomePage
