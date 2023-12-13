import { Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage5 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [100, 15],
	})

	return (
		<Image
			boxSize={['150px', '300px', '450px', '550px', '650px']}
			objectFit="cover"
			ref={parallax.ref}
			src="mem5.webp"
			alt="mem5"
			borderRadius={5}
			position="relative"
			zIndex="0"
			boxShadow="10px 10px 5px 5px rgba(69, 15, 80, 0.5)"
		/>
	)
}

export default ParallaxImage5
