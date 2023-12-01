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
				width="100%"
				left="50%"
				top="50%"
				height="100%"
				objectFit="cover"
				transform="translate(-50%, -50%)"
			>
				<source src="head.webm" type="video/webm" />
			</Box>
		</Box>
	)
}

export default VideoBackground
