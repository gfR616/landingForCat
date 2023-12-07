import cardsApi from '../../api/cardsApi'
import CardComponent from './cardComponent'
import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const CardsOfCats = () => {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkMobile = () => {
			setIsMobile(window.innerWidth <= 600)
		}

		window.addEventListener('resize', checkMobile)
		checkMobile() // Call the function initially

		return () => {
			window.removeEventListener('resize', checkMobile)
		}
	}, [])

	return isMobile ? (
		<Swiper
			// spaceBetween={1}
			slidesPerView={1}
			autoplay={{ delay: 3000, disableOnInteraction: false }}
			pagination={{
				clickable: true,
			}}
			navigation={true}
			className="mySwiper"
			modules={[Autoplay, Pagination, Navigation]}
		>
			{cardsApi.map((cat, index) => (
				<SwiperSlide key={index}>
					<CardComponent cat={cat} index={index} />
				</SwiperSlide>
			))}
		</Swiper>
	) : (
		<Box display="flex" alignItems="center" justifyContent="center" w="200wv">
			{cardsApi.map((cat, index) => (
				<CardComponent cat={cat} index={index} key={index} />
			))}
		</Box>
	)
}

export default CardsOfCats
