import cardsApi from '../../api/cardsApi'
import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Image,
	Text,
} from '@chakra-ui/react'
import React from 'react'

const CardOfCats = () => {
	return (
		<Box
			display="flex"
			alignItems="center"
			justifyContent="center"
			w="200wv"
			border="2px yellow solid"
		>
			{cardsApi.map((cat, index) => (
				<Card m="5" key={index} maxW="lg" bg={cat.color}>
					<CardHeader>
						<Flex spacing="4">
							<Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
								<Avatar size="2xl" name={cat.name} src={cat.ava} />
								<Box>
									<Heading size="sm" fontSize="2xl">
										{cat.name}
									</Heading>
									<Text fontSize="xl">{cat.profession}</Text>
								</Box>
							</Flex>
						</Flex>
					</CardHeader>
					<CardBody>
						<Text ext as="b">
							{cat.description}
						</Text>
					</CardBody>
					<Image objectFit="cover" boxSize="550px" src={cat.photo} alt="Kittens" />
				</Card>
			))}
		</Box>
	)
}

export default CardOfCats
