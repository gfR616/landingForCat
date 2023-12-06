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
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const CardsOfCats = () => {
	return (
		<Box display="flex" alignItems="center" justifyContent="center" w="200wv">
			{cardsApi.map((cat, index) => {
				const ref = useRef()
				const [inView, entry] = useInView({
					triggerOnce: false,
					ref: ref,
					threshold: 0,
				})

				const variants = {
					hidden: { opacity: 0 },
					show: {
						opacity: 1,
						transition: {
							delay: index * 0.5,
							duration: 1,
						},
					},
				}
				return (
					<motion.div
						ref={ref}
						variants={variants}
						initial="hidden"
						animate={inView ? 'show' : 'hidden'}
						key={index}
					>
						<Card m="3" w="md" overflow="hidden" bg={cat.color}>
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
							<Box
								h="55vh"
								w="100%"
								overflow="hidden"
								bgImage={cat.photo}
								alt="Kittens"
								bgRepeat="no-repeat"
								bgSize="cover"
								bgPosition="up"
							/>
							<CardFooter h="20px"></CardFooter>
						</Card>
					</motion.div>
				)
			})}
		</Box>
	)
}

export default CardsOfCats
