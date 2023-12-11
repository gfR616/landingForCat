import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage5 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [10, 0],
		translateX: [-5, 5],
	})

	return (
		<Image
			ref={parallax.ref}
			src="mem5.jpg"
			borderRadius={5}
			position="relative"
			zIndex="1"
			boxShadow="5px 5px 20px 10px rgba(0, 0, 0, 0.5)"
		/>
	)
}

export default ParallaxImage5
