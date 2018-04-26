import React from 'react'
import {Layout} from 'antd'
import StyledContent from 'components/StyledContent'
import Header from 'components/Header'
import FirstPage from 'containers/FirstPage'
import InvoiceForm from 'components/InvoiceForm'

export default class MainContent extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			id: null,
			form: null
		}

		this.showForm = this.showForm.bind(this)
	}
	showForm(id, form) {
		this.setState({id, form})
	}
	render() {
		return <Layout>
			<Header key="header" caption={this.state.form}/>,
			<StyledContent key="content">
				{!this.state.form
					? <FirstPage showForm={this.showForm}/>
					: <InvoiceForm invoiceId={this.state.id}/>
				}
			</StyledContent>
		</Layout>
	}
}
