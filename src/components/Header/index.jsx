import React from 'react'
import styled from 'styled-components'
import {Layout, Divider} from 'antd'

const {Header} = Layout

const StyledHeader = styled(Header)`
	background: #f0f2f5;
	padding: 10px 50px 0;
`
const StyledDivider = styled(Divider)`
	> span {
		border-left: 5px solid #c2c4c7;
		padding: 0 12px;
		color: rgba(0, 0, 0, 0.65);
    	font-size: 16px;
	}
	::before {
		width: 0px !important;
	}
`

export default ({caption}) =>
	<StyledHeader>
		<StyledDivider orientation="left">
			{caption
				? caption === `add` ? `Create invoice` : `Edit invoice`
				: `Invoices`
			}
		</StyledDivider>
	</StyledHeader>