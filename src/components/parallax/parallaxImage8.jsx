import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage8 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [60, -40],
	})
	return (
		<Image
			boxSize={['150px', '300px', '450px', '550px', '650px']}
			objectFit="cover"
			ref={parallax.ref}
			src="mem8.webp"
			alt="mem8"
			borderRadius={5}
			position="relative"
			zIndex="0"
			boxShadow="10px 10px 5px 5px rgba(69, 15, 80, 0.5)"
		/>
	)
}

export default ParallaxImage8
