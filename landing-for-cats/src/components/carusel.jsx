import { photos } from '../api/catsPhoto'
import {
	Box,
	Image,
	Modal,
	ModalContent,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carusel = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()

	return (
		<Box m={3}>
			<Swiper
				spaceBetween={5}
				slidesPerView={4}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				className="mySwiper"
				modules={[Autoplay, Pagination, Navigation]}
			>
				{Object.keys(photos).map((photoKey, index) => (
					<SwiperSlide key={index}>
						{<img src={photos[photoKey]} alt={`Photo ${index + 1}`}></img>}
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default Carusel
