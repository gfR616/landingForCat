import HelloPhrace from './helloPhrase'
import { Box } from '@chakra-ui/react'
import React from 'react'

const VideoPhone = () => {
	return (
		<Box position="relative" height="100vh" width="100%">
			<video
				autoPlay
				loop
				muted
				style={{
					position: 'absolute',
					width: '100%',
					left: '50%',
					top: '50%',
					height: '100%',
					objectFit: 'cover',
					transform: 'translate(-50%, -50%)',
					zIndex: '-1',
				}}
			>
				<source src="head.webm" type="video/webm" />
			</video>
			<HelloPhrace />
		</Box>
	)
}

export default VideoPhone
