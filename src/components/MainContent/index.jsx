import React from 'react'
import styled from 'styled-components'
// import {injectIntl} from 'react-intl'
import {Layout} from 'antd'
// import ListEditor from 'containers/ListEditor'
// import Menu from 'containers/Menu'

// const {Content, Sider, Footer} = Layout

const StyledLayout = styled(Layout)`
	margin-top: 10px;
	background: #fff;
`
// const StyledContent = styled(Content)`
// 	padding: 24px 50px;
// `
// const StyledFooter = styled(Footer)`
// 	background: #fff;
// `
// const StyledSider = styled(Sider)`
// 	background: #fff;
// 	>.ant-layout-sider-trigger {
// 		color: #1890ff;
// 		background: #f0f1f2;
// 	}
// 	>.ant-layout-sider-trigger:hover {
// 		box-shadow: 1px -1px 8px #1890ff;
// 	}
// `

export default class MainContent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			collapsed: false
		}

		this.onCollapse = this.onCollapse.bind(this)
	}
	onCollapse(collapsed) {
		this.setState({collapsed})
	}
	render() {
		return <StyledLayout>
			Content
		</StyledLayout>
	}
}
