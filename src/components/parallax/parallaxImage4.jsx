import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage4 = () => {
	const parallax = useParallax({
		speed: 50,
	})

	return (
		<Image
			ref={parallax.ref}
			src="mem4.jpg"
			borderRadius={5}
			position="relative"
			// top="-500vh"
			// right="-30vh"
			zIndex="0"
		/>
	)
}

export default ParallaxImage4
