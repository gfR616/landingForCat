import cardsApi from '../../api/cardsApi'
import CardComponent from './cardsComponent'
import { Box } from '@chakra-ui/react'
import React from 'react'

const CardsOfCats = () => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" w="200wv">
			{cardsApi.map((cat, index) => (
				<CardComponent cat={cat} index={index} key={index} />
			))}
		</Box>
	)
}

export default CardsOfCats
