import Draggable from './draggable'
import Droppable from './droppable'
import { Box, Image, Text } from '@chakra-ui/react'
import { DndContext } from '@dnd-kit/core'
import React, { useState } from 'react'

const MiniGame = () => {
	const [isDropped, setIsDropped] = useState(false)
	const draggableMarkup = (
		<Draggable>
			<img src="cat.jpg" />
		</Draggable>
	)
	function handleDragEnd(event) {
		if (event.over && event.over.id === 'droppable') {
			setIsDropped(true)
		}
	}

	return (
		<Box w="200vw" h="600px" bg="red">
			<DndContext onDragEnd={handleDragEnd}>
				{!isDropped ? draggableMarkup : null}
				<Droppable>
					{isDropped ? draggableMarkup : <Image src="рыбовий.bmp" w="300px" />}
				</Droppable>
				{isDropped && <Text>рыбовий съеден</Text>}
			</DndContext>
		</Box>
	)
}

export default MiniGame
