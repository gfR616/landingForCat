import { Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage1 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [50, -10],
	})

	return (
		<>
			<Image
				boxSize={['200px', '350px', '500px', '600px', '800px']}
				objectFit="cover"
				ref={parallax.ref}
				src="mem1.webp"
				alt="mem1"
				borderRadius={5}
				position="relative"
				zIndex="1"
				boxShadow="10px 10px 5px 5px rgba(69, 15, 80, 0.5)"
			/>
		</>
	)
}

export default ParallaxImage1
