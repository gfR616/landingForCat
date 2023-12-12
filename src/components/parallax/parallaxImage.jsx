import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = () => {
	const parallax = useParallax({
		translateY: [250, -20],
		translateX: [20, 20],
	})

	return (
		<Box h="auto" ref={parallax.ref}>
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
					src="mem.webp"
					alt="mem"
					borderRadius={180}
					position="relative"
					boxShadow="0 0 20px 20px rgba(0, 0, 0, 0.5)"
				/>
			</Center>
		</Box>
	)
}

export default ParallaxImage
