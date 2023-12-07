import { photos } from '../../api/catsPhoto'
import ModalWindow from '../modalWindow.jsx'
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
	useDisclosure,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'

const CardComponent = ({ cat, index }) => {
	const [ref, inView] = useInView()
	const { isOpen, onOpen, onClose } = useDisclosure()
	const [currentPhoto, setCurrentPhoto] = useState(null)

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

	const handleAvaClick = () => {
		setCurrentPhoto(cat.ava)
		onOpen()
	}

	const handlePhotoClick = () => {
		setCurrentPhoto(cat.photo)
		onOpen()
	}

	return (
		<Box>
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
									<Avatar
										size="2xl"
										name={cat.name}
										src={cat.ava}
										onClick={handleAvaClick}
									/>
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
							onClick={handlePhotoClick}
						/>
						<CardFooter h="20px"></CardFooter>
					</Card>
				</Box>
			</motion.div>
			<ModalWindow
				isOpen={isOpen}
				onClose={onClose}
				currentPhoto={currentPhoto}
				navigation={false}
			/>
		</Box>
	)
}

export default CardComponent
