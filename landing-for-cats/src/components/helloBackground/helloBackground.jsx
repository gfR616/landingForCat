import HelloPhrace from './helloPhrase'
import VideoBackground from './videoBackground'
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'

const HelloBackground = () => {
	return (
		<Box h="100vh">
			{/* <VideoBackground /> */}
			<HelloPhrace />
		</Box>
	)
}

export default HelloBackground
