import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage1 = () => {
	const parallax = useParallax({
		speed: -28,
	})

	return (
		<Box
			boxShadow="0 0 20px 1px rgb(242, 246, 223)"
			as={'video'}
			ref={parallax.ref}
			autoPlay
			loop
			muted
			src="mem6.webm"
			borderRadius={180}
			position="absolute"
			top="-500"
			left="0"
			right="0"
			bottom="50"
			margin="auto"
		/>
	)
}

export default ParallaxImage1
