import { Box, Center } from '@chakra-ui/react'
import React, { CSSProperties, useState } from 'react'
import BeatLoader from 'react-spinners/BeatLoader'

const LoadingScreen = () => {
	let [color, setColor] = useState('#a9c81f')

	return (
		<Box h="100vh" display="flex" justifyContent="center" alignItems="center">
			<BeatLoader color={color} size={60} />
		</Box>
	)
}

export default LoadingScreen
