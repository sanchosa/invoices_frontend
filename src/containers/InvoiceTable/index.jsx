import React from 'react'
import {Table} from 'antd'
import Panel from 'components/Panel'
import Label from 'components/Label'
import ActionButtons from './content/ActionButtons'
import inject from './inject'

class InvoiceTable extends React.PureComponent {
	constructor(props) {
		super(props)

		this.columns = [
			{
				title: 'Create',
				dataIndex: 'date',
				key: 'date'
			}, {
				title: 'No',
				dataIndex: 'number',
				key: 'number'
			}, {
				title: 'Supply',
				dataIndex: 'supplyDate',
				key: 'supply'
			}, {
				title: 'Comment',
				dataIndex: 'comment',
				key: 'comment'
			}, {
				title: 'Actions',
				key: 'actions',
				render: (text, record) => <ActionButtons data={record} edit={this.props.editClick}/>
			}
		]
	}
	componentDidMount() {
		this.props.getInvoices && this.props.getInvoices()
	}
	render() {
		return <Panel>
			<Label>Invoices</Label>
			<Table
				dataSource={this.props.invoices}
				columns={this.columns}
				pagination={{position: `bottom`}}
				rowKey="id"
				loading={this.props.loading}
			/>
		</Panel>
	}
}

export default inject(InvoiceTable)