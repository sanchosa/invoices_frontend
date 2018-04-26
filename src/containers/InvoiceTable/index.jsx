import React from 'react'
import {Button} from 'antd'

export default props =>
	<div>
		Table
		<Button onClick={() => props.editClick(12345, `edit`)}>Edit</Button>
	</div>