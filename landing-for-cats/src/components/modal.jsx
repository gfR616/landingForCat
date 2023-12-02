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
import React from 'react'

const ModalWindow = ({ isOpen, onClose, onGivePhoto }) => {
	return (
		<Box>
			<Modal isOpen={isOpen} onClose={onClose}>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Modal Title</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<img src={onGivePhoto} alt="Selected" />
					</ModalBody>

					<ModalFooter>
						<Button variant="ghost">Secondary Action</Button>
						<Button colorScheme="blue" ml={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default ModalWindow
