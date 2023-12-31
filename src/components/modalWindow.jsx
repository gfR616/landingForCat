import {
	Box,
	Button,
	Image,
	Modal,
	ModalBody,
	ModalContent,
	ModalOverlay,
} from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'

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
				p="0px"
			>
				<ModalOverlay />
				<ModalContent
					onClick={onClose}
					display="flex"
					justifyContent="center"
					alignItems="center"
					height="98vh"
					backgroundColor="#000000b7"
				>
					{/* пустой невидимый элемент, чтобы перевести на него фокус чакры */}
					<div
						ref={initialRef}
						tabIndex="-1"
						aria-hidden="true"
						style={{ position: 'absolute', top: '-5000px' }}
					/>
					<ModalBody display="flex" justifyContent="space-between" alignItems="center">
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
								sx={{
									'@media (max-width: 965px)': {
										display: 'none',
									},
								}}
							>
								<SlArrowLeft size={35} />
							</Button>
						)}
						<Image
							onClick={(e) => {
								e.stopPropagation()
							}}
							src={currentPhoto}
							alt={currentPhoto}
							h="98vh"
							w="auto"
							objectFit="cover"
							sx={{
								'@media (max-width: 965px)': {
									h: 'auto',
									w: '100vw',
								},
							}}
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
								sx={{
									'@media (max-width: 965px)': {
										display: 'none',
									},
								}}
							>
								<SlArrowRight size={35} />
							</Button>
						)}
					</ModalBody>
				</ModalContent>
			</Modal>
		</Box>
	)
}

export default ModalWindow
