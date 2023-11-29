'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'

export default function RootLayout({ children }) {
	return (
		<CacheProvider>
			<ChakraProvider>
				<html lang="en">
					<body>{children}</body>
				</html>
			</ChakraProvider>
		</CacheProvider>
	)
}
