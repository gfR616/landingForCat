import { photos } from '../api/catsPhoto'
import ModalWindow from './modal'
import { Box, Image, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carusel = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedPhoto, setSelectedPhoto] = useState(null)

	const handleOpenModal = (photo) => {
		setSelectedPhoto(photo)
		onOpen()
	}
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
					<SwiperSlide key={index} onClick={() => handleOpenModal(photos[photoKey])}>
						{<img src={photos[photoKey]} alt={`Photo ${index + 1}`}></img>}
					</SwiperSlide>
				))}
			</Swiper>
			<ModalWindow
				isOpen={isOpen}
				onClose={onClose}
				onGivePhoto={selectedPhoto}
			></ModalWindow>
		</Box>
	)
}

export default Carusel
