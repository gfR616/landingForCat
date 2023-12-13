import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const VideoBackground = ({ onVideoLoadedChecker }) => {
	return (
		<Box position="absolute" height="100vh" width="100%">
			<Box
				as="video"
				autoPlay
				loop
				muted
				height="100%"
				width="100%"
				objectFit="cover"
				onLoadedData={onVideoLoadedChecker}
			>
				<source src="./head.webm" type="video/webm" />
			</Box>
		</Box>
	)
}

export default VideoBackground
