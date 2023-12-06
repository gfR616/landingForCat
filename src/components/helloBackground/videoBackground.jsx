import HelloPhrace from './helloPhrase'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const VideoBackground = () => {
	return (
		<Box
			position="absolute"
			height="100vh"
			width="100%"
			as={motion.div}
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
		>
			<Box as="video" autoPlay loop muted height="100%" width="100%" objectFit="cover">
				<source src="head.webm" type="video/webm" />
			</Box>
		</Box>
	)
}

export default VideoBackground
