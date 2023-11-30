import { Box } from '@chakra-ui/react'
import React from 'react'

const HelloPhrace = () => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" height="100vh">
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
