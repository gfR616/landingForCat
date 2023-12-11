import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage8 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [0, 0],
		translateX: [0, 30],
	})

	return (
		<Image
			className="spinner"
			ref={parallax.ref}
			src="mem8.webm"
			borderRadius={5}
			position="relative"
			zIndex="0"
			boxShadow="5px 5px 20px 10px rgba(0, 0, 0, 0.5)"
		/>
	)
}

export default ParallaxImage8
