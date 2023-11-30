import Carusel from '../components/carusel'
import VideoPhone from '../components/videoPhone'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
	return (
		<Box>
			<Box color="white" bg="black">
				by Roman
			</Box>
			<VideoPhone />
			<Carusel />
		</Box>
	)
}

export default HomePage
