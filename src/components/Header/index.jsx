import React from 'react'
import styled from 'styled-components'
import {Layout} from 'antd'

const {Header} = Layout

const StyledHeader = styled(Header)`
	background: #f0f2f5;
`

export default () =>
	<StyledHeader>
		header
	</StyledHeader>