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
			<Modal isOpen={isOpen} onClose={onClose} size="xl" bg="black">
				<ModalOverlay />
				<ModalContent
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '92vh',
						backgroundColor: '#050303b3',
					}}
				>
					<ModalHeader color="white">Modal Title</ModalHeader>
					<ModalCloseButton color="white" />
					<ModalBody>
						<img
							src={onGivePhoto}
							alt="Selected"
							style={{ maxHeight: '100%', width: 'auto' }}
						/>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="whiteAlpha" mr={3}>
							предыдущее
						</Button>
						<Button colorScheme="whiteAlpha" mr={0}>
							следующее
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default ModalWindow
