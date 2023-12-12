import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage2 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [40, 6],
		translateX: [-5, 5],
	})

	return (
		<Image
			ref={parallax.ref}
			src="mem2.webp"
			alt="mem2"
			borderRadius={5}
			position="relative"
			zIndex="1"
			boxShadow="5px 5px 10px 10px rgba(0, 0, 0, 0.5)"
		/>
	)
}

export default ParallaxImage2
