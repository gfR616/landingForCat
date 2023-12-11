import ParallaxImage from './parallaxImage'
import ParallaxImage1 from './parallaxImage1'
import ParallaxImage2 from './parallaxImage2'
import ParallaxImage3 from './parallaxImage3'
import ParallaxImage4 from './parallaxImage4'
import { Box, Grid, GridItem, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Parallax, ParallaxProvider, useParallax } from 'react-scroll-parallax'

const ParallaxEffect = () => {
	return (
		<ParallaxProvider>
			<Parallax>
				<Box
					h="300vh"
					overflow="hidden"
					backgroundImage="url('catBG.jpg')"
					backgroundSize="cover"
					backgroundPosition="center"
					borderRadius={3}
				>
					<Grid gridTemplateColumns={'1fr 1fr'} gap="30vw">
						<GridItem>
							<ParallaxImage2 />
						</GridItem>
						<GridItem>
							<ParallaxImage3 />
						</GridItem>
						<GridItem>
							<ParallaxImage4 />
						</GridItem>
						{/* <ParallaxImage3 />
						<ParallaxImage4 /> */}
					</Grid>
				</Box>
			</Parallax>
		</ParallaxProvider>
	)
}

export default ParallaxEffect
