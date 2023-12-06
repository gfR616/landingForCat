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
		<Box display="flex" alignItems="center" justifyContent="center" w="200wv">
			{cardsApi.map((cat, index) => (
				<Card m="3" key={index} w="md" overflow="hidden" bg={cat.color}>
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
					<CardBody h="100px" overflowY="auto">
						<Text ext as="b">
							{cat.description}
						</Text>
					</CardBody>
					<Image
						objectFit="cover"
						h="55vh"
						overflow="hidden"
						src={cat.photo}
						alt="Kittens"
					/>
					<CardFooter h="20px"></CardFooter>
				</Card>
			))}
		</Box>
	)
}

export default CardOfCats
