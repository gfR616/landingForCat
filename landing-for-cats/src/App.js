import './app.css'
import HomePage from './pages/homePage'
import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'

function App() {
	return (
		<ChakraProvider>
			<HomePage />
		</ChakraProvider>
	)
}

export default App
