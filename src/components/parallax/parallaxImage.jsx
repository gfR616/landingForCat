import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = () => {
	const parallax = useParallax({
		easing: 'easeOutQuad',
		translateY: [1000, 0],
		translateX: [150, 150],
	})

	return (
		<Box
			w="20vh"
			h="20vh"
			ref={parallax.ref}
			display="flex"
			flexDirection="row"
			position="absolute"
		>
			<Center>
				<Text
					mr={5}
					fontWeight="bold"
					fontStyle="italic"
					fontSize={['15px', '20px', '30px']}
					color="#000000"
					textShadow="1px 1px #961919"
				>
					эт я →
				</Text>

				<Image
					objectFit="cover"
					src="mem.jpg"
					borderRadius={180}
					position="relative"
					boxShadow="0 0 20px 20px rgba(0, 0, 0, 0.5)"
				/>
			</Center>
		</Box>
	)
}

export default ParallaxImage
