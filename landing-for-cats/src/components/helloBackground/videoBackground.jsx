import HelloPhrace from './helloPhrase'
import { Box } from '@chakra-ui/react'
import React from 'react'

const VideoBackground = () => {
	return (
		<Box position="absolute" height="100vh" width="100%">
			<Box
				as="video"
				autoPlay
				loop
				muted
				position="absolute"
				heght="inherit"
				w="100%"
				objectFit="cover"
			>
				<source src="head.webm" type="video/webm" />
			</Box>
		</Box>
	)
}

export default VideoBackground
