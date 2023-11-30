import { photos } from '../api/catsPhoto'
import { Box, Button } from '@chakra-ui/react'
import React from 'react'
import 'swiper/css'
import 'swiper/css/bundle'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

const HomePage = () => {
	return (
		<Box>
      <Box></Box>
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
					<SwiperSlide key={index}>
						{<img src={photos[photoKey]} alt={`Photo ${index + 1}`}></img>}
					</SwiperSlide>
				))}
			</Swiper>
		</Box>
	)
}

export default HomePage
