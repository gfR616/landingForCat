import { photos } from '../../api/catsPhoto'
import ModalWindow from '../modalWindow.jsx'
import { Box, Image, useDisclosure } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const Carusel = () => {
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [currentPhotoIndex, setCurrentPhotoIndex] = useState(null)
	const [ref, inView] = useInView()
	const photoKeys = Object.keys(photos)

	const variants = {
		hidden: { opacity: 0 },
		show: {
			opacity: 1,
			transition: {
				duration: 1,
				delay: 0.1,
			},
		},
	}

	useEffect(() => {
		if (currentPhotoIndex !== null) {
			onOpen()
		}
	}, [currentPhotoIndex])

	const handleOpenModal = (photoIndex) => {
		setCurrentPhotoIndex(photoIndex)
	}

	const handleNext = () => {
		setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photoKeys.length)
	}

	const handlePrev = () => {
		setCurrentPhotoIndex(
			(prevIndex) => (prevIndex - 1 + photoKeys.length) % photoKeys.length,
		)
	}

	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={inView ? 'show' : 'hidden'}
		>
			<Box m={5}>
				<Swiper
					grabCursor={true}
					spaceBetween={5}
					slidesPerView={3}
					autoplay={{ delay: 3000, disableOnInteraction: false }}
					pagination={{
						clickable: true,
					}}
					navigation={true}
					className="mySwiper"
					modules={[Autoplay, Pagination, Navigation]}
				>
					{photoKeys.map((photoKey, index) => (
						<SwiperSlide key={index} onClick={() => handleOpenModal(index)}>
							{
								<Image
									borderRadius="8px"
									src={photos[photoKey]}
									alt={`Photo ${index + 1}`}
								></Image>
							}
						</SwiperSlide>
					))}
				</Swiper>
				<ModalWindow
					isOpen={isOpen}
					onClose={onClose}
					currentPhoto={photos[photoKeys[currentPhotoIndex]]}
					onNext={handleNext}
					onPrev={handlePrev}
					navigation={true}
				/>
			</Box>
		</motion.div>
	)
}

export default Carusel