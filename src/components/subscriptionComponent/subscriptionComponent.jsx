import { Box, Button, Text } from '@chakra-ui/react'
import React from 'react'
import { FaTelegram } from 'react-icons/fa6'

const SubscriptionComponent = () => {
	return (
		<Box
			h="120vh"
			display="flex"
			flexDirection="column"
			alignItems="center"
			justifyContent="center"
		>
			<Text
				fontWeight="bold"
				fontSize={['10px', '15px', '30px']}
				color="#070505"
				textShadow="1px 1px #8d8b8b"
			>
				Хочешь больше контента? Подпишись на телеграмм канал моих кошек!
			</Text>

			<Box
				m={12}
				boxShadow="0 0 20px 1px rgb(242, 246, 223)"
				as={'video'}
				autoPlay
				loop
				muted
				src="mem1.webm"
				borderRadius={180}
			/>

			<Button
				m={12}
				colorScheme="telegram"
				size="lg"
				onClick={() => window.open('https://t.me/r123616r', '_blank')}
			>
				<FaTelegram size={30} />
				&nbsp;&nbsp;&nbsp;Подписаться!
			</Button>
		</Box>
	)
}

export default SubscriptionComponent