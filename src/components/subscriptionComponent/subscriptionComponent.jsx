import { Box, Button, Center, Image, Text } from '@chakra-ui/react'
import React from 'react'

const SubscriptionComponent = () => {
	return (
		<Box
			h="100vh"
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Text
				fontWeight="bold"
				fontSize={['15px', '20px', '30px']}
				color="#c6c6c6"
				textShadow="1px 1px #050e13"
			>
				Хочешь больше контента? Подпишись на телеграмм канал моих кошек!
			</Text>

			<Box mt={5}
				boxShadow="0 0 20px 1px rgb(242, 246, 223)"
				as={'video'}
				autoPlay
				loop
				muted
				src="mem1.webm"
				borderRadius={180}
				// position="absolute"
			/>

			<Button
				m={8}
				colorScheme="telegram"
				onClick={() => window.open('https://t.me/r123616r', '_blank')}
			>
				Подписаться!
			</Button>
		</Box>
	)
}

export default SubscriptionComponent
