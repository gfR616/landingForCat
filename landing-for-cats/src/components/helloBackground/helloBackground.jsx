import HelloPhrace from './helloPhrase'
import VideoBackground from './videoBackground'
import { Box } from '@chakra-ui/react'
import React from 'react'

const HelloBackground = () => {
	return (
		<Box>
			<VideoBackground />
			<HelloPhrace />
		</Box>
	)
}

export default HelloBackground
