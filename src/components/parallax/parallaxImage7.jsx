import { Image } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage7 = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [50, -60],
	})

	return (
		<Image
			boxSize={['200px', '350px', '500px', '600px', '800px']}
			objectFit="cover"
			ref={parallax.ref}
			src="mem7.webp"
			alt="mem7"
			borderRadius={5}
			position="relative"
			zIndex="0"
			boxShadow="10px 10px 5px 0.5vh rgba(69, 15, 80, 0.5)"
		/>
	)
}

export default ParallaxImage7
