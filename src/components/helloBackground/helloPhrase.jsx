import { Text } from '@chakra-ui/react'
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
			<Text
				fontWeight="bold" // делает текст жирным
				fontSize={['15px', '20px', '30px']} // устанавливает размер шрифта
				color="#c6c6c6"
			>
				<Text textAlign="center">Привет!</Text>
				Вы на сайте, посвещенном моим кошкам,
				<br />
				<Text textAlign="center">покрутите колесико вниз, чтобы увидеть их.</Text>
			</Text>
		</motion.div>
	)
}

export default HelloPhrace
