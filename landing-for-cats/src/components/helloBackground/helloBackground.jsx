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
		<Box>
			<Box className="wow slideInRight" data-wow-duration="1s" data-wow-delay="1s">
				<HelloPhrace />
			</Box>
			<VideoBackground />
		</Box>
	)
}

export default HelloBackground
