import { Box, Center, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'

const HelloPhrace = () => {
	// const handleClick = () => {
	// 	api.start({
	// 		from: {
	// 			x: 50,
	// 		},
	// 		to: {
	// 			x: 100,
	// 		},
	// 	})
	return (
		<>
			<Box
				as={motion.div}
				background={'#01010273'}
				borderRadius={8}
				animate={{ x: [-1000, 50, 0] }}
			>
				<Text
					fontWeight="bold" // делает текст жирным
					fontSize="30px" // устанавливает размер шрифта
					color="#c6c6c6"
				>
					<Text textAlign="center">Привет!</Text>
					Вы на сайте, посвещенном моим кошкам,
					<br />
					<Text textAlign="center">покрутите колесико вниз, чтобы увидеть их.</Text>
				</Text>
			</Box>
		</>
	)
}

export default HelloPhrace
