import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage4 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [10, 30],
		translateX: [10, -5],
	})

	return (
		<Image
			ref={parallax.ref}
			src="mem4.webp"
			alt="mem4"
			borderRadius={5}
			position="relative"
			zIndex="0"
			boxShadow="5px 5px 20px 10px rgba(0, 0, 0, 0.5)"
		/>
	)
}

export default ParallaxImage4
