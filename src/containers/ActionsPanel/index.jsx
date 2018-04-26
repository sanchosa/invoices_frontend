import React from 'react'
import {Button} from 'antd'
import styled from 'styled-components'
import Label from 'components/Label'
import Panel from 'components/Panel'
import connect from './connect'

const ActionsPanel = props => {
	const onClick = () => {
		props.onClick && props.onClick(null, `add`)
		props.storeInvoice && props.storeInvoice()
	}
	return <Panel>
		<Label>Actions</Label>
		<Button type="primary" onClick={onClick}>Add new</Button>
	</Panel>
}

export default connect(ActionsPanel)