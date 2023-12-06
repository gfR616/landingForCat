import {
	Avatar,
	Box,
	Card,
	CardBody,
	CardFooter,
	CardHeader,
	Flex,
	Heading,
	Text,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import { useInView } from 'react-intersection-observer'

const CardComponent = ({ cat, index }) => {
	const [ref, inView] = useInView()

	const variants = {
		hidden: { opacity: 0, y: -50 },
		show: {
			opacity: 1,
			y: 0,
			transition: {
				delay: index * 0.2,
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
		>
			<Box display="flex" alignItems="center" justifyContent="center" w="200wv">
				<Card key={index} m="3" w="md" overflow="hidden" bg={cat.color}>
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
						<Text as="b">{cat.description}</Text>
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
			</Box>
		</motion.div>
	)
}

export default CardComponent
