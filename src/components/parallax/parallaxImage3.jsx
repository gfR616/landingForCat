import { Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage3 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [50, -10],
	})

	return (
		<Image
			boxSize="800px"
			objectFit="cover"
			ref={parallax.ref}
			src="mem3.webp"
			alt="mem3"
			borderRadius={5}
			position="relative"
			zIndex="1"
			boxShadow="10px 10px 5px 5px rgba(69, 15, 80, 0.5)"
		/>
	)
}

export default ParallaxImage3
