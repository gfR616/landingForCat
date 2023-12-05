import { Box } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'

const Header = () => {
	useEffect(() => {
		window.scrollTo(0, 24)
		window.onbeforeunload = function () {
			window.scrollTo(0, 24)
		}
	}, [])

	return (
		<Box color="white" bg="#000000" fontWeight="bold" fontStyle={'italic'}>
			by R616
		</Box>
	)
}

export default Header