import ParallaxImage1 from './parallaxImage1'
import ParallaxImage2 from './parallaxImage2'
import ParallaxImage3 from './parallaxImage3'
import ParallaxImage4 from './parallaxImage4'
import ParallaxImage5 from './parallaxImage5'
import ParallaxImage6 from './parallaxImage6'
import ParallaxImage7 from './parallaxImage7'
import ParallaxImage8 from './parallaxImage8'
import ParallaxImage9 from './parallaxImage9'
import { Box, Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const ParallaxEffect = () => {
	return (
		<ParallaxProvider>
			<Parallax>
				<Box h="auto" overflow="hidden" p="1.8vw">
					<Grid gridTemplateColumns={'1fr 1fr 1fr'} rowGap="8vw" columnGap="2vw">
						<GridItem>
							<ParallaxImage1 />
						</GridItem>
						<GridItem>
							<ParallaxImage2 />
						</GridItem>
						<GridItem>
							<ParallaxImage3 />
						</GridItem>
						<GridItem>
							<ParallaxImage4 />
						</GridItem>
						<GridItem>
							<ParallaxImage5 />
						</GridItem>
						<GridItem>
							<ParallaxImage6 />
						</GridItem>
						<GridItem>
							<ParallaxImage7 />
						</GridItem>
						<GridItem>
							<ParallaxImage8 />
						</GridItem>
						<GridItem>
							<ParallaxImage9 />
						</GridItem>
					</Grid>
				</Box>
			</Parallax>
		</ParallaxProvider>
	)
}

export default ParallaxEffect
