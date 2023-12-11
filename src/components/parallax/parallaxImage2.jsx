import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage2 = () => {
	const parallax = useParallax({
		speed: 100,
	})

	return (
		<Image
			ref={parallax.ref}
			src="mem2.jpg"
			borderRadius={5}
			position="relative"
			// top="-300vh"
			// right="30vh"
			zIndex="1"
		/>
	)
}

export default ParallaxImage2
