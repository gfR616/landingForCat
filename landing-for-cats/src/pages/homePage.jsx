import Carusel from '../components/carusel'
import VideoPhone from '../components/videoPhone'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HomePage = () => {
	return (
		<Box>
			<VideoPhone />
			<Carusel />
		</Box>
	)
}

export default HomePage
