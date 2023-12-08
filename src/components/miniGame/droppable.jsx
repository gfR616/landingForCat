import { Box } from '@chakra-ui/react'
import { DndContext, useDroppable } from '@dnd-kit/core'
import React from 'react'

const Droppable = ({ children }) => {
	const { isOver, setNodeRef } = useDroppable({
		id: 'droppable',
	})
	const style = {
		color: isOver ? 'green' : undefined,
	}

	return (
		<div ref={setNodeRef} style={style}>
			{children}
		</div>
	)
}

export default Droppable
