import { Box, Center, Text } from '@chakra-ui/react'
import { animated, useSpring } from '@react-spring/web'
import React from 'react'

const HelloPhrace = () => {
	const springs = useSpring({
		from: { x: 0 },
		to: { x: 100 },
	})

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
			{/* <Box
				as={animated.div}
				// onClick={handleClick}
				width={80}
				height={80}
				background={'#6d77ff'}
				borderRadius={8}
				{...springs}
			/> */}
			<animated.div
				style={{
					width: 80,
					height: 80,
					background: '#ff6d6d',
					borderRadius: 8,
					...springs,
				}}
			><Text textAlign="center">Привет!</Text>
			Вы на сайте, посвещенном моим кошкам,
			<br />
			<Text textAlign="center">покрутите колесико вниз, чтобы увидеть их.</Text>
			</Text>  </animated.div>
		</>
	)
}
// }

export default HelloPhrace

// <Box
// display="flex"
// justifyContent="center"
// alignItems="center"
// position="absolute"
// top="0"
// left="0"
// width="100%"
// height="100vh"
// >
// {
/* <Text
fontWeight="bold" // делает текст жирным
fontSize="30px" // устанавливает размер шрифта
color="#000000"
>
<Text textAlign="center">Привет!</Text>
Вы на сайте, посвещенном моим кошкам,
<br />
<Text textAlign="center">покрутите колесико вниз, чтобы увидеть их.</Text>
</Text> */
// }
