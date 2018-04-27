import React from 'react'
import {Layout} from 'antd'
import StyledContent from 'components/StyledContent'
import Header from 'components/Header'
import FirstPage from 'components/FirstPage'
import InvoiceForm from 'containers/InvoiceForm'
import PrintImg from 'containers/PrintImage'

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
		return [<Layout key="layout" className="noprint">
			<Header key="header" caption={this.state.form}/>
			<StyledContent key="content">
				{!this.state.form
					? <FirstPage showForm={this.showForm}/>
					: <InvoiceForm invoiceId={this.state.id} showForm={this.showForm}/>
				}
			</StyledContent>
		</Layout>,
		<PrintImg key="img"/>]
	}
}
