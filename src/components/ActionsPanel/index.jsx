import React from 'react'
import {Button} from 'antd'

export default props =>
	<div>
		<Button onClick={() => props.onClick(null, `add`)}>Add</Button>
	</div>