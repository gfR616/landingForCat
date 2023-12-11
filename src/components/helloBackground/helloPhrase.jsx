import { Box, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React from 'react'
import { useInView } from 'react-intersection-observer'

const HelloPhrace = () => {
	const [ref, inView] = useInView()
	const variants = {
		hidden: { opacity: 0, scale: 0.5 },
		show: {
			opacity: 1,
			scale: 1,
			transition: {
				duration: 0.5,
				delay: 0.5,
			},
		},
	}
	return (
		<motion.div
			ref={ref}
			variants={variants}
			initial="hidden"
			animate={'show'}
			style={{
				textShadow: '2px 2px 2px #4a4747',
			}}
		>
			<Box
				fontWeight="bold" // делает текст жирным (как твоя мамаша)
				fontSize={['15px', '20px', '30px']} // устанавливает размер шрифта
				color="#c6c6c6"
				textShadow="1px 1px#1030d1"
			>
				<Text textAlign="center">Привет!</Text>
				Вы на сайте, посвещенном моим кошкам,
				<br />
				<Text textAlign="center">покрутите колесико вниз, чтобы увидеть их.</Text>
			</Box>
		</motion.div>
	)
}

export default HelloPhrace
