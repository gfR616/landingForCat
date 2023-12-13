import cardsApi from '../../api/cardsApi'
import CardComponent from './cardComponent'
import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CardsOfCats = () => {
	return (
		<>
			<Box
				as={Swiper}
				width="100%"
				maxW="max-content"
				sx={{
					'@media (min-width: 965px)': {
						display: 'none',
						margin: 'auto',
					},
				}}
				slidesPerView={1}
				autoplay={{ delay: 2500, disableOnInteraction: false }}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
			>
				{cardsApi.map((cat, index) => (
					<SwiperSlide key={index}>
						<CardComponent cat={cat} index={index} />
					</SwiperSlide>
				))}
			</Box>
			<Grid
				margin="auto"
				templateColumns="1fr 1fr 1fr 1fr"
				templateRows="1fr"
				maxW="max-content"
				gap="1px"
				sx={{
					'@media (max-width: 965px)': {
						display: 'none',
					},
					'@media (max-width: 1912px)': {
						gridTemplateColumns: '1fr 1fr 1fr',
						gridTemplateRows: '1fr',
					},
					'@media (max-width: 1463px)': {
						gridTemplateColumns: '1fr 1fr',
						gridTemplateRows: '1fr 1fr',
					},
				}}
			>
				{cardsApi.map((cat, index) => (
					<CardComponent cat={cat} index={index} key={index} />
				))}
			</Grid>
		</>
	)
}
export default CardsOfCats
