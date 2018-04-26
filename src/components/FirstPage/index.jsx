import React from 'react'
import ActionsPanel from 'components/ActionsPanel'
import InvoiceTable from 'containers/InvoiceTable'

const FirstPage = props => [
	<ActionsPanel key="buttonpanel" onClick={props.showForm}/>,
	<InvoiceTable key="table" editClick={props.showForm}/>
]

export default FirstPage