import React from 'react'
import StyledContent from 'components/StyledContent'
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
		return <StyledContent>
			{!this.state.form
				? <FirstPage showForm={this.showForm}/>
				: <InvoiceForm invoiceId={this.state.id}/>
			}
		</StyledContent>
	}
}
