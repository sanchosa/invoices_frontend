import React from 'react'
import {Button} from 'antd'
import styled from 'styled-components'
import Label from 'components/Label'
import Panel from 'components/Panel'

export default props =>
	<Panel>
		<Label>Actions</Label>
		<Button type="primary" onClick={() => props.onClick(null, `add`)}>Add new</Button>
	</Panel>