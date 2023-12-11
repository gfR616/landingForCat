import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage3 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [20, 10],
	})

	return (
		<Image
			className="spinner"
			ref={parallax.ref}
			src="mem3.webm"
			borderRadius={5}
			position="relative"
			zIndex="1"
			boxShadow="5px 5px 20px 10px rgba(0, 0, 0, 0.5)"
		/>
	)
}

export default ParallaxImage3
