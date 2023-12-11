import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const VideoBackground = () => {
	const [ref, inView] = useInView()
	const variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0,
			},
		},
	}
	return (
		<motion.div variants={variants} animate={'show'} ref={ref} initial="hidden">
			<Box position="absolute" height="100vh" width="100%">
				<Box as="video" autoPlay loop muted height="100%" width="100%" objectFit="cover">
					<source src="head.webm" type="video/webm" />
				</Box>
			</Box>
		</motion.div>
	)
}

export default VideoBackground
