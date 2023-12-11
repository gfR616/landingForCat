import { Box, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { useParallax } from 'react-scroll-parallax'

const ParallaxImage = () => {
	const parallax = useParallax({
		speed: -15,
	})

	return (
		<Box
			ref={parallax.ref}
			display="flex"
			flexDirection="row"
			position="absolute"
			top="150vh"
			left="80vw"
			w="auto"
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
			</Center>

			<Image
				w="auto"
				objectFit="cover"
				src="mem.jpg"
				borderRadius={180}
				position="relative"
				boxShadow="0 0 20px 20px rgba(0, 0, 0, 0.5)"
			/>
		</Box>
	)
}

export default ParallaxImage
