import { photos } from '../api/catsPhoto'
import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
} from '@chakra-ui/react'
import React, { useState } from 'react'

const ModalWindow = ({ isOpen, onClose, currentPhoto, onNext, onPrev }) => {
	console.log(currentPhoto)
	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose} size="full" bg="black">
				<ModalOverlay />
				<ModalContent
					onClick={onClose}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						maxHeight: '100vh',
						backgroundColor: '#000000b7',
					}}
				>
					<ModalBody
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						<Button
							onClick={(e) => {
								e.stopPropagation()
								onPrev()
							}}
							colorScheme="whiteAlpha"
							bg="#edebeb14"
							h="100vh"
							w="25vh"
						>
							Назад
						</Button>
						<img
							onClick={(e) => {
								e.stopPropagation()
							}}
							src={currentPhoto}
							alt="Selected"
							style={{ maxHeight: '100vh', width: 'auto' }}
						/>
						<Button
							onClick={(e) => {
								e.stopPropagation()
								onNext()
							}}
							colorScheme="whiteAlpha"
							bg="#edebeb14"
							h="100vh"
							w="25vh"
						>
							Вперед
						</Button>
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default ModalWindow
