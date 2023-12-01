import HelloPhrace from './helloPhrase'
import VideoBackground from './videoBackground'
import { Box } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import { WOW } from 'wowjs'
import 'wowjs/css/libs/animate.css'

const HelloBackground = () => {
	useEffect(() => {
		new WOW().init()
	}, [])
	return (
		<Box h="100vh">
			<VideoBackground />
			<Box
				pos="relative"
				className="wow slideInRight"
				data-wow-duration="1s"
				data-wow-delay="1s"
			>
				<HelloPhrace />
			</Box>
		</Box>
	)
}

export default HelloBackground
