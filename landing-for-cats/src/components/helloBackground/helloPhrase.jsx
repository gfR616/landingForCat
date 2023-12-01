import { Box, Center, Text } from '@chakra-ui/react'
import React from 'react'

const HelloPhrace = () => {
	return (
		<Box
			display="flex"
			justifyContent="center"
			alignItems="center"
			position="absolute"
			top="0"
			left="0"
			width="100%"
			height="100vh"
		>
			<Text
				fontWeight="bold" // делает текст жирным
				fontSize="30px" // устанавливает размер шрифта
				color="#000000"
			>
				<Text textAlign="center">Привет!</Text>
				Вы на сайте, посвещенном моим кошкам,
				<br />
				<Text textAlign="center">покрутите колесико вниз, чтобы увидеть их.</Text>
			</Text>
		</Box>
	)
}

export default HelloPhrace
