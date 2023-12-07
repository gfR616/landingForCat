import { photos } from '../api/catsPhoto'
import {
	Box,
	Button,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'

const ModalWindow = ({ isOpen, onClose, currentPhoto, onNext, onPrev, navigation }) => {
	const [navigationButtons, setNavigationButtons] = useState(navigation)
	const initialRef = useRef()
	return (
		<Box>
			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
				size="full"
				bg="black"
			>
				<ModalOverlay />

				<ModalContent
					onClick={onClose}
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						height: '98vh',
						backgroundColor: '#000000b7',
					}}
				>
					<div
						ref={initialRef}
						tabIndex="-1"
						aria-hidden="true"
						style={{ position: 'absolute', top: '-5000px' }}
					/>
					<ModalBody
						style={{
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}
					>
						{navigationButtons && (
							<Button
								onClick={(e) => {
									e.stopPropagation()
									onPrev()
								}}
								colorScheme="whiteAlpha"
								bg="#edebeb14"
								h="98vh"
								w="20vh"
								borderRadius="20px 0 0 20px"
							>
								Назад
							</Button>
						)}
						<img
							onClick={(e) => {
								e.stopPropagation()
							}}
							src={currentPhoto}
							alt="Selected"
							style={{ height: '98vh', width: 'auto' }}
						/>
						{navigationButtons && (
							<Button
								onClick={(e) => {
									e.stopPropagation()
									onNext()
								}}
								colorScheme="whiteAlpha"
								bg="#edebeb14"
								h="98vh"
								w="20vh"
								borderRadius="0 20px 20px 0"
							>
								Вперед
							</Button>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default ModalWindow
