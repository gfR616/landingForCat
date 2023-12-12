import HelloPhrace from './helloPhrase'
import VideoBackground from './videoBackground'
import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const HelloBackground = () => {
	return (
		<Box h="100vh">
			<Text
				m={5}
				fontSize="25px"
				color="#00000092"
				fontWeight="bold"
				fontStyle={'italic'}
				textShadow="1px 1px #2083b8"
				position="absolute"
				zIndex="10"
			>
				By gfr616
			</Text>
			<Center height="100vh" width="100%">
				<Box display="flex" position="absolute">
					<HelloPhrace />
				</Box>
			</Center>
		</Box>
	)
}

export default HelloBackground
