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
						maxHeight: '100vh',
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
								h="100vh"
								w="25vh"
								// borderRadius={10}
								border-top-left-radius={0}
								border-bottom-right-radius={0}
								_focus={{ outline: 'none' }}
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
							style={{ maxHeight: '100vh', width: 'auto' }}
						/>
						{navigationButtons && (
							<Button
								onClick={(e) => {
									e.stopPropagation()
									onNext()
								}}
								colorScheme="whiteAlpha"
								bg="#edebeb14"
								h="100vh"
								w="25vh"
								borderRadius={0}
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
