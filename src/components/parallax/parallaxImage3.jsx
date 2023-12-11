import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage3 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [100, 0],
	})

	return (
		<Image
			className="spinner"
			ref={parallax.ref}
			src="mem3.jpg"
			borderRadius={5}
			position="relative"
			// top="-450vh"
			// left="70vw"
			zIndex="1"
		/>
	)
}

export default ParallaxImage3
