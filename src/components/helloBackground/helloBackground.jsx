import HelloPhrace from './helloPhrase'
import VideoBackground from './videoBackground'
import { Box, Center } from '@chakra-ui/react'
import React from 'react'

const HelloBackground = () => {
	return (
		<Box h="100vh">
			<VideoBackground />
			<Center height="100vh" width="100%">
				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					position="absolute"
				>
					<HelloPhrace />
				</Box>
			</Center>
		</Box>
	)
}

export default HelloBackground
