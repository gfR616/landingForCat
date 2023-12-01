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
import 'swiper/css/bundle'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carusel = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [selectedImage, setSelectedImage] = useState('')

	return (
		<Box>
			<Swiper
				spaceBetween={5}
				slidesPerView={4}
				onSlideChange={() => console.log('slide change')}
				onSwiper={(swiper) => console.log(swiper)}
				autoplay={{ delay: 3000, disableOnInteraction: false }}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{Object.keys(photos).map((photoKey, index) => (
					<SwiperSlide
						key={index}
						onClick={() => {
							setSelectedImage(photos[photoKey])
							onOpen()
						}}
					>
						{<img src={photos[photoKey]} alt={`Photo ${index + 1}`}></img>}
					</SwiperSlide>
				))}
			</Swiper>

			<Modal isOpen={isOpen} onClose={onClose} size="full">
				<ModalOverlay />
				<ModalContent>
					<Image src={selectedImage} alt="Selected" />
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default Carusel
