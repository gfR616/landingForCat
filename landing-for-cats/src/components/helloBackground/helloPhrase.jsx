import { Box } from '@chakra-ui/react'
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
			<p>
				Привет!
				<br /> Ты на сайте, посвещенном моим кошкам
				<br />
				Крути колесико!
			</p>
		</Box>
	)
}

export default HelloPhrace
