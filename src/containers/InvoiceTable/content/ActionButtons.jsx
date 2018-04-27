import React from 'react'
import {Button, Popconfirm} from 'antd'

const ButtonGroup = Button.Group

export default props => {
	const editClick = () => props.edit && props.edit(props.data.id, `edit`)
	const deleteClick = () => props.delete && props.delete(props.data)
	const printClick = () => props.print && props.print()

	return <ButtonGroup>
		<Button key="edit" icon="edit" onClick={editClick}/>
		<Popconfirm title={`Are you sure delete invoice #${props.data.number} ?`}
			onConfirm={deleteClick}
			okText="Yes" cancelText="No"
		>
			<Button key="delete" type="danger" icon="delete"/>
		</Popconfirm>

		<Button key="print" icon="printer" onClick={printClick}/>
	</ButtonGroup>
}